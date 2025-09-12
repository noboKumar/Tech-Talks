import mongodbPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

type CommentInput = {
  postId: string;
  comment: string;
  commentBy_email: string;
  commentBy_name: string;
  commentBy_userPhoto: string;
  createdAt: Date;
};

export async function PATCH(req: Request) {
  try {
    const body: CommentInput = await req.json();
    const {
      postId,
      comment,
      commentBy_email,
      commentBy_name,
      commentBy_userPhoto,
    } = body;

    const client = await mongodbPromise;
    const db = client.db("tech_talks_DB");
    const postCollection = db.collection("post");

    await postCollection.updateOne(
      { _id: new ObjectId(postId) },
      {
        $addToSet: {
          comments: {
            comment,
            commentBy_email,
            commentBy_name,
            commentBy_userPhoto,
            createdAt: new Date(),
          },
        },
      }
    );
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "error", error: String(error) },
      { status: 500 }
    );
  }
}
