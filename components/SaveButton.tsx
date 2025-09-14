"use client";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { FiBookmark } from "react-icons/fi";
import axios from "axios";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { IoBookmark } from "react-icons/io5";

const SaveButton = ({
  postId,
  savedBy,
}: {
  postId: string;
  savedBy: string[];
}) => {
  const { data: session } = useSession();
  const user = session?.user;

  const [saved, setSaved] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      setSaved(user?.email ? savedBy?.includes(user.email) : false);
    } else {
      setSaved(false);
    }
  }, [user, savedBy]);

  const handleSave = async () => {
    if (user) {
      try {
        const newSaved = !saved;
        await axios.patch("/api/post/save", {
          postId: postId,
          saved: !saved,
          savedByEmail: user?.email,
        });

        if (newSaved) {
          toast.success("Post saved successfully");
        } else {
          toast.success("Post unsaved");
        }

        setSaved(newSaved);
      } catch (error) {
        console.log("error on save button: " + error);
      }
    } else {
      toast.error("Please login to save");
    }
  };
  return (
    <Button
      onClick={handleSave}
      variant="ghost"
      className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors"
    >
      {saved ? (
        <>
          <IoBookmark />
          <span>saved</span>
        </>
      ) : (
        <>
          <FiBookmark />
          <span>save</span>
        </>
      )}
    </Button>
  );
};

export default SaveButton;
