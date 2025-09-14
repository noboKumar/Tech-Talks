import Link from "next/link";
import { Button } from "./ui/button";
import { FiMessageCircle } from "react-icons/fi";

type CommentButtonProps = {
  comments: string[];
  postId: string;
  isLoggedIn: boolean;
};

const CommentButton = ({
  comments,
  postId,
  isLoggedIn,
}: CommentButtonProps) => {
  return (
    <Link href={`/${postId}#comments`}>
      <Button
        variant="ghost"
        disabled={!isLoggedIn}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
      >
        <FiMessageCircle /> <span>{comments?.length} Comment</span>
      </Button>
    </Link>
  );
};

export default CommentButton;
