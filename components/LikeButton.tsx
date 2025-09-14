"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

type LikeButtonProps = {
  postId: string;
  likes: string[];
  isLoggedIn: boolean;
};

const LikeButton = ({ postId, likes, isLoggedIn }: LikeButtonProps) => {
  const { data } = useSession();
  const user = data?.user;

  const [showHeart, setShowHeart] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(likes?.length || 0);

  useEffect(() => {
    if (user) {
      setLiked(user?.email ? likes?.includes(user.email) : false);
    } else {
      setLiked(false);
    }
  }, [likes, user]);

  const handleLike = async () => {
    const newLiked = !liked;
    setShowHeart(newLiked);
    setLiked(newLiked);
    setLikesCount((prev) => (newLiked ? prev + 1 : prev - 1));

    if (!isLoggedIn) {
      toast.error("Please login to like");
      return;
    }

    // remove after animation
    setTimeout(() => setShowHeart(false), 1000);

    try {
      await axios.patch("/api/post/like", {
        postId: postId,
        liked: newLiked,
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
        disabled={!isLoggedIn}
        className={`flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors ${
          liked ? "text-red-500" : ""
        }`}
      >
        {liked ? <FaHeart /> : <FiHeart />}
        <span>{likesCount} Likes</span>
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
