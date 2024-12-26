import { postServices } from "@/entities/post/api/services";
import { GetPostParams } from "@/shared/lib/end-points/post";
import { PostCard } from "@/widgets/post-card";

interface PostsProps {
  params: GetPostParams;
}

export default async function Posts({ params }: PostsProps) {
  const postId = parseInt((params?.postId as unknown as string) || "0");
  const { post } = await postServices.getPost({
    postId,
  });

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold mb-6 truncate">Post {post.title}</h1>
      <PostCard post={post} />
    </div>
  );
}
