"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { useSession } from "next-auth/react";

const LikeButton = ({ postId }: { postId: string }) => {
  const [showHeart, setShowHeart] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const { data } = useSession();
  const user = data?.user;

  const handleLike = async () => {
    setShowHeart(!showHeart);
    setLiked(!liked);

    // remove after animation
    setTimeout(() => {
      setShowHeart(false);
    }, 1000);

    console.log("Liked post:", postId);

    try {
      await axios.patch("/api/post", {
        postId: postId,
        liked: liked,
        userEmail: user?.email,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative">
      {/* like button */}
      <Button
        onClick={handleLike}
        variant="ghost"
        className={`flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors ${
          liked ? "text-red-500" : ""
        }`}
      >
        {liked ? <FaHeart /> : <FiHeart />}
        <span>1 Like</span>
      </Button>

      {/* Popup heart over the photo */}
      {showHeart && (
        <span className="absolute left-1/2 -top-40 -translate-x-1/2 text-red-500 text-6xl animate-float">
          ❤️
        </span>
      )}
    </div>
  );
};

export default LikeButton;
