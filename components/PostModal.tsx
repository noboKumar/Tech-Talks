"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import axios from "axios";
import { useSession } from "next-auth/react";

type PostModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  trigger: React.ReactNode;
};

const PostModal = ({ open, setOpen, trigger }: PostModalProps) => {
  const { data: session } = useSession();

  const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const postContent = formData.get("postContent");
    const postPhoto = formData.get("postPhoto");
    const postBy_email = session?.user?.email;
    const postBy_name = session?.user?.name;

    const data = {
      postContent: postContent,
      postPhoto: postPhoto,
      postBy_email: postBy_email,
      postBy_name: postBy_name,
    };

    try {
      const res = await axios.post("/api/post", data);
      console.log(res.data);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="bg-card">
        <form onSubmit={handlePost}>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold">
              Add Your Post
            </AlertDialogTitle>
            <AlertDialogDescription className="py-5">
              <textarea
                className="w-full border-2 rounded-2xl p-2"
                name="postContent"
                placeholder="Share Your Thoughts..."
              />
              <input
                type="link"
                className="border-2 w-full rounded-2xl p-2"
                name="postPhoto"
                placeholder="Photo Link"
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button type="submit">Post</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PostModal;
