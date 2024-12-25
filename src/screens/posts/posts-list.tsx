import { Post } from "@/entities/post/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

interface PostsListProps {
  posts: Post[];
}

export function PostsList({ posts }: PostsListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>{post.body}</CardContent>
        </Card>
      ))}
    </div>
  );
}
