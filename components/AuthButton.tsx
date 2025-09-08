"use client";

import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";

const AuthButton = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      {session ? (
        <div className="flex items-center gap-2">
          <p>Welcome, {session?.user?.name}!</p>
          <Button variant="destructive">Log Out</Button>
        </div>
      ) : (
        <Link href="/login">
          <Button>Log In</Button>
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
