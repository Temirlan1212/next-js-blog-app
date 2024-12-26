import { Post, PostComment } from "@/entities/post/types";
import { CardTitle } from "@/shared/ui/card";
import { PostCard } from "@/widgets/post-card";
import { PostCommentsList } from "@/widgets/post-comments-list";

interface PostsProps {
  post: Post;
  comments: PostComment[];
}

export default async function Posts({ post, comments }: PostsProps) {
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold mb-6 truncate">Post {post.title}</h1>
      <PostCard post={post} />

      <CardTitle className="mt-7">Comments</CardTitle>

      <div className="border-b my-5" />
      <PostCommentsList postComments={comments} />
    </div>
  );
}
