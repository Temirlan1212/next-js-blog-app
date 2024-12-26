import { Post } from "@/entities/post/types";
import { PostCard } from "./post-card";
import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/lib/classnames";
import { getSkeletons } from "@/shared/lib/get-skeletons";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { paths } from "@/shared/routing";

export interface PostsListProps {
  posts: Post[];
}

export function PostsList({ posts }: PostsListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <PostCard post={post} key={post.id + index}>
          <div className="w-full flex justify-end p-3">
            <Link href={paths.post({ postId: post.id })}>
              <Button>Link to detail page</Button>
            </Link>
          </div>
        </PostCard>
      ))}
    </div>
  );
}

export function PostsListSkeletons({ count }: { count: number }) {
  return (
    <div className="space-y-4">
      {getSkeletons(count, <Skeleton className={cn("w-full h-44")} />)}
    </div>
  );
}
