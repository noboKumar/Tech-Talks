import mongodbPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

type Save = {
  postId: string;
  savedByEmail: string;
  saved: boolean;
};

interface Post {
  _id: ObjectId;
  savedBy?: string[];
}

export async function PATCH(req: Request) {
  try {
    const body: Save = await req.json();
    const { savedByEmail, postId, saved } = body;

    const client = await mongodbPromise;
    const db = client.db("tech_talks_DB");
    const postCollection = db.collection<Post>("post");

    if (saved) {
      await postCollection.updateOne(
        { _id: new ObjectId(postId) },
        { $addToSet: { savedBy: savedByEmail } }
      );
    } else {
      await postCollection.updateOne(
        { _id: new ObjectId(postId) },
        { $pull: { savedBy: savedByEmail } }
      );
    }

    return NextResponse.json({ message: "successfully saved post" });
  } catch (error) {
    return NextResponse.json(
      { message: "error", error: String(error) },
      { status: 500 }
    );
  }
}
