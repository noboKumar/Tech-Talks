import PostFeed from "@/components/PostFeed";
import PostForm from "@/components/PostForm";
import UserProfile from "@/components/UserProfile";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* User Profile */}
      <div className="border-2 bg-card max-h-fit rounded-xl p-5">
        <UserProfile />
      </div>

      {/* feed */}
      <div className="col-span-2 border-2 rounded-xl">
        <PostForm />
        <div className="bg-card min-h-screen rounded-xl">
          <PostFeed />
        </div>
      </div>

      {/* right side */}
      <div>
        <div className="border-2 bg-card h-70 max-h-80 rounded-xl"></div>
      </div>
    </div>
  );
}
