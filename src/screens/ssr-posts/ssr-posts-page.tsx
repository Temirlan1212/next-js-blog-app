import { postServices } from "@/entities/post/api/services";
import { PostsList } from "@/widgets/posts-list";
import { PaginationWithLinks } from "@/ui/pagination-with-links";
import { SearchWithLinks } from "@/ui/search-with-links";

interface PostsProps {
  searchParams: { [key: string]: string | undefined };
}
export default async function Posts({ searchParams }: PostsProps) {
  const currentPage = parseInt((searchParams.page as string) || "1");
  const postsPerPage = parseInt((searchParams.pageSize as string) || "5");
  const searchValue = (searchParams?.search as string) || "";

  const { posts, totalPosts } = await postServices.getPosts({
    page: currentPage,
    perPage: postsPerPage,
    search: { fields: ["title_like"], value: searchValue },
  });

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="mb-5">
        <SearchWithLinks defaultValue={searchValue} />
      </div>

      <PostsList posts={posts} />
      <div className="mt-8">
        <PaginationWithLinks
          page={currentPage}
          pageSize={postsPerPage}
          totalCount={totalPosts}
          pageSizeSelectOptions={{
            pageSizeOptions: [5, 10],
          }}
        />
      </div>
    </div>
  );
}
