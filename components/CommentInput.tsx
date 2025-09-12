import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const CommentInput = () => {
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
      <form className="w-full flex items-center gap-2">
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
