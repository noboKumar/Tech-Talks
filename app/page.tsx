import PostFeed from "@/components/PostFeed";
import PostForm from "@/components/PostForm";
import StorySection from "@/components/StorySection";
import UserProfile from "@/components/UserProfile";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-4 gap-4 p-4">
      {/* User Profile */}
      <div className="border-2 bg-card max-h-fit rounded-xl p-5 hidden lg:block">
        <UserProfile />
      </div>

      {/* feed */}
      <div className="lg:col-span-2 border-2 rounded-xl">
        <div className="p-2">
          <StorySection />
        </div>
        <div>
          <PostForm />
        </div>
        <div className="bg-card min-h-screen rounded-xl">
          <PostFeed />
        </div>
      </div>

      {/* right side */}
      <div className="hidden lg:block">
        <div className="border-2 bg-card h-70 max-h-80 rounded-xl"></div>
      </div>
    </div>
  );
}
