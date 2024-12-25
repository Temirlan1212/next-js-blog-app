import { PostsPage } from "@/screens/posts";

export const metadata = {
  title: "Posts",
  description: "Posts",
};

interface Props {
  searchParams: { [key: string]: string | undefined };
}

export default async function Page({ searchParams }: Props) {
  return <PostsPage searchParams={searchParams} />;
}
