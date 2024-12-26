import { PostPage } from "@/screens/post";
import { GetPostParams } from "@/shared/lib/end-points/post";

export const metadata = {
  title: "Post",
  description: "Post",
};

interface Props {
  params: GetPostParams;
}

export default async function Page({ params }: Props) {
  return <PostPage params={params} />;
}
