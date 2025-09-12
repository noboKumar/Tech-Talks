import mongodbPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { postContent, postPhoto, postBy_email, postBy_name } =
      await req.json();
    const client = await mongodbPromise;
    const db = client.db("tech_talks_DB");
    const postCollection = db.collection("post");
    await postCollection.insertOne({
      postContent,
      postPhoto,
      postBy_email,
      postBy_name,
      createdAt: new Date(),
      likes: [],
      comments: [],
      saved: [],
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json(
      { message: "error", error: String(error) },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { postId, userEmail, liked } = body;

    const client = await mongodbPromise;
    const db = client.db("tech_talks_DB");
    const postCollection = db.collection("post");

    if (liked) {
      await postCollection.updateOne(
        { _id: new ObjectId(postId) },
        { $addToSet: { likes: userEmail } }
      );
    } else {
      await postCollection.updateOne(
        { _id: new ObjectId(postId) },
        { $pull: { likes: userEmail } }
      );
    }

    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json(
      { message: "error", error: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await mongodbPromise;
    const db = client.db("tech_talks_DB");
    const postCollection = db.collection("post");
    const posts = await postCollection.find({}).toArray();
    return NextResponse.json({ posts });
  } catch (error) {
    console.log(error);
  }
}
