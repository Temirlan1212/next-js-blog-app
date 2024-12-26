import { postServices } from "@/entities/post/api/services";
import { userServices } from "@/entities/user";
import { PostPage } from "@/screens/post";
import {
  GetPostCommentsParams,
  GetPostParams,
} from "@/shared/lib/end-points/post";
import { paths } from "@/shared/routing";

interface Props {
  params: GetPostParams | GetPostCommentsParams;
}

export const generateMetadata = async ({ params }: Props) => {
  const postId = parseInt((params?.postId as unknown as string) || "0");
  const { post } = await postServices.getPost({ postId });

  return {
    title: `${post.title} - Blog Post`,
    description: post.body.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.body,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${paths.post({ postId })}`,
      type: "article",
    },
    twitter: {
      title: post.title,
      description: post.body,
    },
  };
};

export const generateStaticParams = async () => {
  const { posts } = await postServices.getPosts({});
  return posts.map((post) => ({
    postId: post.id.toString(),
  }));
};

export default async function Page({ params }: Props) {
  const postId = parseInt((params?.postId as unknown as string) || "0");

  const { post } = await postServices.getPost({ postId });

  const { comments } = await postServices.getPostComments({ postId });

  const { user } = await userServices.getUser({
    userId: post.userId,
  });

  return <PostPage post={post} comments={comments} user={user} />;
}
