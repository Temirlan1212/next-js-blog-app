"use client";
import { PostsList, PostsListSkeletons } from "@/widgets/posts-list";
import { usePostsStore } from "./model/store/posts";
import { useEffect } from "react";
import { SearchBar } from "@/shared/ui/search-bar";
import { Button } from "@/shared/ui/button";
import { postsSelectors } from "./model/selectors/posts";
import { CardDescription } from "@/shared/ui/card";

interface PostsProps {}
export default function Posts(props: PostsProps) {
  const posts = usePostsStore(postsSelectors.selectPosts);
  const mutatePosts = usePostsStore(postsSelectors.selectMutatePosts);
  const setParams = usePostsStore(postsSelectors.selectSetParams);
  const loadMorePosts = usePostsStore(postsSelectors.selectLoadMorePosts);
  const params = usePostsStore(postsSelectors.selectParams);
  const meta = usePostsStore(postsSelectors.selectMeta);
  const loading = usePostsStore(postsSelectors.selectLoading);

  useEffect(() => {
    mutatePosts("init-loading");
  }, []);

  const notFound = posts.length < 1 && !!params.search.value;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Client-side Rendered Posts</h1>
      <CardDescription className="text-xl mb-6">
        Discover client-side rendered posts enhanced with{" "}
        <span className="underline">infinite scroll</span> and efficient{" "}
        <span className="underline">Zustand state management</span>, ensuring a
        smooth and dynamic browsing experience.
      </CardDescription>

      <div className="mb-5 sticky top-1">
        <SearchBar
          loading={loading === "loading"}
          onDebounceChange={(v) => {
            setParams({
              search: { fields: params.search?.fields || [], value: v },
            });
            mutatePosts("loading");
          }}
          inputProps={{ placeholder: "Search..." }}
        />
      </div>

      {loading === "init-loading" && <PostsListSkeletons count={10} />}
      {loading !== "init-loading" && <PostsList posts={posts} />}

      {notFound && <div className="w-full text-center">Not found.</div>}

      {!notFound && !meta.isLastPage && posts.length > 0 && (
        <div className="w-full flex justify-center">
          <Button
            className="mt-5 px-7"
            onClick={loadMorePosts}
            loading={loading === "loading"}
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
}
