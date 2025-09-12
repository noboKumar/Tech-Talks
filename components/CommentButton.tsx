"use client";
import { Button } from "./ui/button";
import { FiMessageCircle } from "react-icons/fi";

const CommentButton = ({ comments }: { comments: string[] }) => {
  return (
    <Button
      variant="ghost"
      className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
    >
      <FiMessageCircle /> <span>{comments?.length} Comment</span>
    </Button>
  );
};

export default CommentButton;
