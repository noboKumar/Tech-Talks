import { getUserSession } from "@/lib/userSession";
import Link from "next/link";
import {
  FiHome,
  FiBell,
  FiUsers,
  FiCalendar,
  FiUser,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";
import { Button } from "./ui/button";
import Image from "next/image";
import mongodbPromise from "@/lib/mongodb";

const UserProfile = async () => {
  const user = await getUserSession();
  const myPosts = [];

  if (user?.email) {
    const client = await mongodbPromise;
    const db = client.db("tech_talks_DB");
    const postCollection = db.collection("post");
    const posts = await postCollection
      .find({ postBy_email: user?.email })
      .toArray();
    myPosts.push(...posts);
  }

  const menuItems = [
    { name: "Feed", icon: <FiHome />, href: "/feed" },
    { name: "Profile", icon: <FiUser />, href: "/profile" },
    { name: "Notification", icon: <FiBell />, href: "/notifications" },
    { name: "Connections", icon: <FiUsers />, href: "/connections" },
    { name: "Events", icon: <FiCalendar />, href: "/events" },
    { name: "Settings", icon: <FiSettings />, href: "/settings" },
    { name: "Help", icon: <FiHelpCircle />, href: "/help" },
  ];
  if (!user) {
    return (
      <div className="text-center p-6">
        <p className="text-gray-600 mb-4">
          You’re not logged in yet. Please sign in to access your profile and
          connect with others.
        </p>
        <Link href="/login">
          <Button>Log In</Button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      {/* user info */}
      <div className="text-center">
        <Image
          className="mx-auto rounded-full"
          height={100}
          width={100}
          src={
            user?.image ||
            "https://i.ibb.co/pB4pgNhr/depositphotos-119671346-stock-illustration-user-icon-vector-male-person.webp"
          }
          alt="user-photo"
        />
        <h2 className="text-lg font-bold">{user?.name}</h2>
        <p className="text-sm text-gray-400">Web Developer</p>
        <p className="text-lg mt-2 text-gray-500">
          I would love to change the world, but they wont give me the source
          code.
        </p>
      </div>
      {/* Follower Stats Card */}
      <div className="max-w-md mx-auto my-6 bg-white shadow-md rounded-xl p-4">
        <div className="grid grid-cols-3 divide-x divide-gray-300 text-center">
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl">
              {myPosts?.length || 0}
            </span>
            <span className="text-gray-500 text-sm sm:text-base">Posts</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl">100</span>
            <span className="text-gray-500 text-sm sm:text-base">
              Followers
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl">50</span>
            <span className="text-gray-500 text-sm sm:text-base">
              Following
            </span>
          </div>
        </div>
      </div>

      <hr className="my-4 border-gray-300 border" />
      {/* route */}
      <div>
        <ul>
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <li className="flex items-center gap-3 my-3 font-medium cursor-pointer hover:text-blue-500">
                {item.icon}
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
