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

const UserProfile = async () => {
  const user = await getUserSession();

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
          className="mx-auto"
          height={100}
          width={100}
          src={
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
      {/* follower stats */}
      <div className="flex justify-around my-4">
        <div className="flex flex-col text-center border-r-2 border-gray-300 pr-4">
          <span className="font-bold">20</span>
          <span className="text-gray-500">Posts</span>
        </div>
        <div className="flex flex-col text-center border-r-2 border-gray-300 px-4">
          <span className="font-bold">100</span>
          <span className="text-gray-500">Followers</span>
        </div>
        <div className="flex flex-col text-center pl-4">
          <span className="font-bold">50</span>
          <span className="text-gray-500">Following</span>
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
