import { PostComment } from "@/entities/post/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

export interface PostCommentCardProps {
  postComment: PostComment;
}

export function PostCommentCard({ postComment }: PostCommentCardProps) {
  return (
    <Card key={postComment.id}>
      <CardHeader>
        <CardTitle>{postComment.name}</CardTitle>
      </CardHeader>
      <CardContent>{postComment.body}</CardContent>
    </Card>
  );
}
