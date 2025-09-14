"use client";
import { FiCode, FiImage, FiLink, FiVideo } from "react-icons/fi";
import { Button } from "./ui/button";
import PostModal from "./PostModal";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const PostForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="bg-card p-4 space-y-4 rounded-t-xl mb-5">
      {/* profile photo and text area */}
      <div className="flex items-center gap-2">
        {user ? (
          <Image
            className="mx-auto rounded-full z-10"
            src={
              user?.image ||
              "https://i.ibb.co/pB4pgNhr/depositphotos-119671346-stock-illustration-user-icon-vector-male-person.webp"
            }
            width={40}
            height={40}
            alt="user photo"
          />
        ) : (
          ""
        )}
        <PostModal
          open={open}
          setOpen={setOpen}
          trigger={
            <p className="w-full border-2 rounded-full py-2 px-5 cursor-pointer text-gray-400">
              What do you think?
            </p>
          }
        />
      </div>
      {/* action buttons */}
      <div className="flex flex-wrap items-center gap-2 pt-3 px-5 justify-between">
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
          className="md:flex hidden items-center gap-2 text-gray-600 hover:text-red-500"
        >
          <FiVideo /> <span>Video</span>
        </Button>
        <Button
          variant="outline"
          className="md:flex hidden items-center gap-2 text-gray-600 hover:text-purple-500"
        >
          <FiLink /> <span>Link</span>
        </Button>
      </div>
    </div>
  );
};

export default PostForm;
