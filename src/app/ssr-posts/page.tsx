import { SsrPostsPage } from "@/screens/ssr-posts";

const fakeRequest = (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

export const metadata = {
  title: "Posts",
  description: "Posts",
};

interface Props {
  searchParams: { [key: string]: string | undefined };
}

export default async function Page({ searchParams }: Props) {
  await fakeRequest({ success: true, message: "Fake request completed" });

  return <SsrPostsPage searchParams={searchParams} />;
}
