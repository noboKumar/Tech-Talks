"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FiHeart } from "react-icons/fi";

const LikeButton = ({ postId }: { postId: string }) => {
  const [showHeart, setShowHeart] = useState<boolean>(false);
  const handleLike = () => {
    setShowHeart(!showHeart);

    // remove after animation
    setTimeout(() => {
      setShowHeart(false);
    }, 1000);

    console.log("Liked post:", postId);
  };
  return (
    <div className="relative">
      {/* Actual like button */}
      <Button
        onClick={handleLike}
        variant="ghost"
        className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
      >
        <FiHeart /> <span>Like</span>
      </Button>

      {/* Popup ❤️ over the photo */}
      {showHeart && (
        <span className="absolute left-1/2 -top-40 -translate-x-1/2 text-red-500 text-6xl animate-float">
          ❤️
        </span>
      )}
    </div>
  );
};

export default LikeButton;
