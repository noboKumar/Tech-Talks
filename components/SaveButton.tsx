import React from "react";
import { Button } from "./ui/button";
import { FiBookmark } from "react-icons/fi";

const SaveButton = () => {
  return (
    <Button
      variant="ghost"
      className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors"
    >
      <FiBookmark /> <span>Save</span>
    </Button>
  );
};

export default SaveButton;
