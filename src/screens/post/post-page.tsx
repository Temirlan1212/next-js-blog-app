import { Post, PostComment } from "@/entities/post/types";
import { User } from "@/entities/user";
import { CardTitle } from "@/shared/ui/card";
import { PostCard } from "@/widgets/post-card";
import { PostCommentsList } from "@/widgets/post-comments-list";
import { UserCard } from "@/widgets/user-card";

interface PostsProps {
  post: Post;
  comments: PostComment[];
  user: User;
}

export default async function PostPage(props: PostsProps) {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-6 truncate">
        Post {props.post.title}
      </h1>

      <CardTitle className="mt-7">Blog</CardTitle>

      <div className="border-b my-5" />

      <PostCard post={props.post} />

      <CardTitle className="mt-7">Author</CardTitle>

      <div className="border-b my-5" />

      <UserCard user={props.user} />

      <CardTitle className="mt-7">Comments</CardTitle>

      <div className="border-b my-5" />

      <PostCommentsList postComments={props.comments} />
    </article>
  );
}
