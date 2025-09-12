import React from "react";
import { Button } from "./ui/button";
import { FiMessageCircle } from "react-icons/fi";

const CommentButton = () => {
  return (
    <Button
      variant="ghost"
      className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
    >
      <FiMessageCircle /> <span>1 Comment</span>
    </Button>
  );
};

export default CommentButton;
