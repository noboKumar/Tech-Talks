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
import { useSession } from "next-auth/react";
import Link from "next/link";

type PostModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  trigger: React.ReactNode;
};

const StoryModal = ({ open, setOpen, trigger }: PostModalProps) => {
  const { data: session } = useSession();

  const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="bg-card">
        {session ? (
          <form onSubmit={handlePost}>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl font-bold">
                Add Your Story for 24h
              </AlertDialogTitle>
              <AlertDialogDescription className="py-5">
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
        ) : (
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold">
              Please Login to Post
            </AlertDialogTitle>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Link href="/login">
                  <Button>Login</Button>
                </Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogHeader>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default StoryModal;
