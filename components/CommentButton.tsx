import Link from "next/link";
import { Button } from "./ui/button";
import { FiMessageCircle } from "react-icons/fi";

const CommentButton = ({
  comments,
  postId,
}: {
  comments: string[];
  postId: string;
}) => {
  return (
    <Link href={`/${postId}#comments`}>
      <Button
        variant="ghost"
        className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
      >
        <FiMessageCircle /> <span>{comments?.length} Comment</span>
      </Button>
    </Link>
  );
};

export default CommentButton;
