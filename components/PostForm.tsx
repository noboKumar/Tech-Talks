"use client";
import { FiCode, FiImage, FiLink, FiVideo } from "react-icons/fi";
import { Button } from "./ui/button";
import PostModal from "./PostModal";
import { useState } from "react";

const PostForm = () => {
  const [open, isOpen] = useState<boolean>(false);
  return (
    <div className="bg-card p-4 space-y-4 rounded-t-xl mb-5">
      {/* profile photo and text area */}
      <div>
        <PostModal
          open={open}
          isOpen={isOpen}
          trigger={
            <textarea
              className="w-full focus:outline-none focus:ring-0 resize-none border-2 rounded-full pt-5 px-5 cursor-pointer"
              name="postContent"
              id="postContent"
              placeholder="What do you want to talk about?"
            ></textarea>
          }
        />
      </div>
      {/* action buttons */}
      <div className="flex justify-between items-center pt-3 px-5">
        <Button
          variant="outline"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
        >
          <FiCode /> <span>Code Snippet</span>
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-gray-600 hover:text-green-500"
        >
          <FiImage /> <span>Photo</span>
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-gray-600 hover:text-red-500"
        >
          <FiVideo /> <span>Video</span>
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-gray-600 hover:text-purple-500"
        >
          <FiLink /> <span>Link</span>
        </Button>
      </div>
    </div>
  );
};

export default PostForm;
