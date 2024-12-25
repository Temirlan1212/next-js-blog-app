import { CSRPostsPage } from "@/screens/csr-posts";

export const metadata = {
  title: "CSR Posts",
  description: "CSR Posts",
};

interface Props {
  searchParams: { [key: string]: string | undefined };
}

export default async function Page({ searchParams }: Props) {
  return <CSRPostsPage />;
}
