import { Post } from "@/entities/post/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card key={post.id}>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>{post.body}</CardContent>
    </Card>
  );
}
