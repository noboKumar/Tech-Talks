import CommentButton from "@/components/CommentButton";
import CommentInput from "@/components/CommentInput";
import LikeButton from "@/components/LikeButton";
import { Button } from "@/components/ui/button";
import { dataBase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiBookmark } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";

type Comment = {
  comment: string;
  commentBy_email: string;
  commentBy_name: string;
  commentBy_userPhoto: string;
  createdAt: Date;
};

const PostDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const db = await dataBase();
  const postCollection = db.collection("post");
  const post = await postCollection.findOne({ _id: new ObjectId(id) });
  console.log(post);
  console.log(id);

  return (
    <div className="max-w-8/12 mx-auto">
      <Link href="/">
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-gray-300 rounded-full p-5 my-2"
        >
          <IoMdArrowRoundBack />
        </Button>
      </Link>
      <div className="p-5 border-2 rounded-2xl bg-card">
        {/* user details */}
        <div>
          <h1 className="text-2xl font-semibold">
            {post?.postBy_name || "anonymous"}
          </h1>
          <p>{post?.createdAt && new Date(post.createdAt).toLocaleString()}</p>
        </div>

        {/* post contents */}
        <div className="space-y-5 py-5">
          <p className="text-xl text-gray-500">{post?.postContent}</p>
          <div className="border-2 rounded-2xl">
            <Image
              src={post?.postPhoto}
              draggable={false}
              alt="post photo"
              width={400}
              height={400}
              priority
              className="rounded-xl mx-auto w-full object-cover"
            />
          </div>
        </div>

        {/* action button */}
        <div className="flex justify-around my-3 border-t border-b py-2">
          {/* Like Button */}
          <LikeButton postId={id} likes={post?.likes} />

          {/* Comment Button */}
          <CommentButton comments={post?.comments} postId={id} />

          {/* Save Button */}
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors"
          >
            <FiBookmark /> <span>Save</span>
          </Button>
        </div>

        <div>
          <CommentInput postId={id} />
          <hr />

          <div className="space-y-5 py-5">
            {/* comments */}
            {post?.comments.map((comment: Comment, index: number) => (
              <div key={index} className="flex items-start gap-2">
                <Image
                  src={comment.commentBy_userPhoto}
                  alt="user photo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="border-2 rounded-2xl p-4 w-full space-y-2 bg-accent">
                  <h1 className="font-bold">{comment.commentBy_name}</h1>
                  <p className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
                  <p className="text-lg">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
