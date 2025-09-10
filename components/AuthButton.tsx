"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { toast } from "sonner";
import AlertCard from "./ui/AlertCard";

const AuthButton = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const handleLogout = () => {
    signOut({
      callbackUrl: "/",
    });
    toast.success("Logged out successfully");
  };

  return (
    <div>
      {user ? (
        <>
          <div className="flex items-center gap-2">
            <AlertCard
              button={<Button variant="destructive">Log Out</Button>}
              title="Are you sure you want to log out?"
              description="You will need to log in again to access your account."
              onConfirm={handleLogout}
            />
          </div>
        </>
      ) : (
        <Link href="/login">
          <Button>Log In</Button>
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
