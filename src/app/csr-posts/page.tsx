import { CSRPostsPage } from "@/screens/csr-posts";

export const metadata = {
  title: "Client-side Rendered Posts",
  description:
    " Discover client-side rendered posts enhanced with infinite scroll and efficient Zustand state management, ensuring a smooth and dynamic browsing experience.",
};

interface Props {
  searchParams: { [key: string]: string | undefined };
}

export default async function Page({ searchParams }: Props) {
  return <CSRPostsPage />;
}
