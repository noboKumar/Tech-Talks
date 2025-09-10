import mongodbPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { postContent, postPhoto, postBy } = await req.json();
    const client = await mongodbPromise;
    const db = client.db("tech_talks_DB");
    const postCollection = db.collection("post");
    await postCollection.insertOne({
      postContent,
      postPhoto,
      postBy,
      createdAt: new Date(),
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json(
      { message: "error", error: String(error) },
      { status: 500 }
    );
  }
}
