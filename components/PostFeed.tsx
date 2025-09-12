import mongodbPromise from "@/lib/mongodb";
import Image from "next/image";
import { FiMessageCircle, FiBookmark } from "react-icons/fi";
import { Button } from "./ui/button";
import LikeButton from "./LikeButton";

const PostFeed = async () => {
  const client = await mongodbPromise;
  const db = client.db("tech_talks_DB");
  const postsCollection = db.collection("post");
  const posts = await postsCollection
    .find({})
    .sort({ createdAt: -1 })
    .toArray();
  console.log({ posts });

  const postId = 10;

  return (
    <div>
      {posts.map((post) => (
        <div className="p-5" key={post._id.toString()}>
          {/* author div */}
          <div className="flex items-center gap-2">
            <Image
              src={
                (post?.postBy_userPhoto && post?.postBy_userPhoto) ||
                "https://i.ibb.co/pB4pgNhr/depositphotos-119671346-stock-illustration-user-icon-vector-male-person.webp"
              }
              alt="user photo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h1 className="font-bold">{post?.postBy_name || "Anonymous"}</h1>
              <p className="text-gray-500 text-sm">
                {post?.createdAt && new Date(post.createdAt).toLocaleString()}
              </p>
            </div>
          </div>

          {/* post content */}
          <p className="text-gray-500 line-clamp-2 my-5">{post?.postContent}</p>

          {/* post photo */}
          <Image
            width={400}
            height={400}
            priority
            className="rounded-xl mx-auto w-full object-cover"
            src={post?.postPhoto}
            alt="post photo"
          />

          {/* action button */}
          <div className="flex justify-around mt-3 border-t border-b py-2">
            {/* Like Button */}
            <LikeButton postId={postId.toString()} />

            {/* Comment Button */}
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <FiMessageCircle /> <span>1 Comment</span>
            </Button>

            {/* Save Button */}
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors"
            >
              <FiBookmark /> <span>Save</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
