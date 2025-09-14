import React from "react";
import logoIcon from "@/public/tech-talks-logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-gray-200 dark:bg-gray-700 p-1">
          <Image
            src={logoIcon}
            alt="Tech Talks Logo"
            priority
            width={40}
            height={40}
          />
        </div>
        <h1 className="font-bold text-2xl text-primary hidden md:block">Tech Talks</h1>
      </div>
    </Link>
  );
};

export default Logo;
