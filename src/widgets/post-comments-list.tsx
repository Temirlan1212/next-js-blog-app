import { PostComment } from "@/entities/post/types";
import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/lib/classnames";
import { getSkeletons } from "@/shared/lib/get-skeletons";
import { PostCommentCard } from "./post-comment-card";

export interface PostCommentsListProps {
  postComments: PostComment[];
}

export function PostCommentsList({ postComments }: PostCommentsListProps) {
  return (
    <div className="space-y-4">
      {postComments.map((postComment, index) => (
        <PostCommentCard
          postComment={postComment}
          key={postComment.id + index}
        />
      ))}
    </div>
  );
}

export function PostCommentsListSkeletons({ count }: { count: number }) {
  return (
    <div className="space-y-4">
      {getSkeletons(count, <Skeleton className={cn("w-full h-44")} />)}
    </div>
  );
}
