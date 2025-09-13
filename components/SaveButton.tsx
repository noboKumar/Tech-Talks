"use client";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { FiBookmark } from "react-icons/fi";
import axios from "axios";
import { toast } from "sonner";

const SaveButton = ({ postId }: { postId: string }) => {
  const { data: session } = useSession();
  const user = session?.user;

  const handleSave = async () => {
    if (user) {
      try {
        await axios.patch("/api/post/save", {
          postId: postId,
          savedByEmail: user?.email,
        });
        toast.success("Post saved successfully");
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
      <FiBookmark /> <span>Save</span>
    </Button>
  );
};

export default SaveButton;
