"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import axios from "axios";

const CommentInput = ({ postId }: { postId: string }) => {
  const { data: session } = useSession();
  const user = session?.user;

  const handleComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get("comment");
    const commentBy_email = user?.email;
    const commentBy_name = user?.name;
    const commentBy_userPhoto = user?.image;

    console.log(comment, commentBy_email, commentBy_name, commentBy_userPhoto);

    try {
      await axios.patch("/api/post/comment", {
        postId: postId,
        comment: comment,
        commentBy_email: commentBy_email,
        commentBy_name: commentBy_name,
        commentBy_userPhoto: commentBy_userPhoto,
      });
    } catch (error) {
      console.log("error on comment input: " + error);
    }
  };
  return (
    <div className="flex items-center gap-2 py-5">
      <Image
        className="mx-auto rounded-full"
        width={40}
        height={40}
        src={
          "https://i.ibb.co/pB4pgNhr/depositphotos-119671346-stock-illustration-user-icon-vector-male-person.webp"
        }
        alt="user photo"
      />
      <form onSubmit={handleComment} className="w-full flex items-center gap-2">
        <input
          className="border-2 w-full rounded-full p-2 px-5"
          placeholder="Add a comment..."
          name="comment"
          type="text"
          required
        />
        <Button type="submit">Post</Button>
      </form>
    </div>
  );
};

export default CommentInput;
