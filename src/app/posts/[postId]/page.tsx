import { postServices } from "@/entities/post/api/services";
import { userServices } from "@/entities/user";
import { PostPage } from "@/screens/post";
import {
  GetPostCommentsParams,
  GetPostParams,
} from "@/shared/lib/end-points/post";

export const metadata = {
  title: "Post",
  description: "Post",
};

interface Props {
  params: GetPostParams | GetPostCommentsParams;
}

export default async function Page({ params }: Props) {
  const postId = parseInt((params?.postId as unknown as string) || "0");

  const { post } = await postServices.getPost({
    postId,
  });

  const { comments } = await postServices.getPostComments({
    postId,
  });

  const { user } = await userServices.getUser({
    userId: post.userId,
  });

  return <PostPage post={post} comments={comments} user={user} />;
}
