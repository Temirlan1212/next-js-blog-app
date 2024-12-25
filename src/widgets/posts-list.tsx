import { Post } from "@/entities/post/types";
import { PostCard } from "./post-card";

export interface PostsListProps {
  posts: Post[];
}

export function PostsList({ posts }: PostsListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <PostCard post={post} key={post.id + index} />
      ))}
    </div>
  );
}
