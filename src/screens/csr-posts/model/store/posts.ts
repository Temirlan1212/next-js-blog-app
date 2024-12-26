import { GetPostsReturnType, postServices } from "@/entities/post/api/services";
import { Post } from "@/entities/post/types";
import { PostParams } from "@/shared/lib/end-points/post";
import { LoadingStatus } from "@/shared/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UsePostsStoreProps {
  loading: LoadingStatus;
  setLoading: (v: LoadingStatus) => void;
  params: PostParams;
  setParams: (v: Partial<UsePostsStoreProps["params"]>) => void;
  posts: Post[];
  setPosts: (v: UsePostsStoreProps["posts"]) => void;
  mutatePosts: (l: LoadingStatus) => void;
  loadMorePosts: () => void;
  getPosts: (l: LoadingStatus) => Promise<GetPostsReturnType>;
  reset: () => void;
  meta: {
    totalPosts: number;
    isLastPage: boolean;
  };
}

export const defaultData = {
  loading: "init" as LoadingStatus,
  posts: [],
  meta: {
    totalPosts: 0,
    isLastPage: false,
  },
  params: {
    page: 1,
    perPage: 10,
    search: { fields: ["title_like"], value: "" },
  },
};

const usePostsStore = create<UsePostsStoreProps>()(
  persist(
    (set, get) => ({
      loading: defaultData.loading,

      reset: () => {
        set({ ...defaultData });
        get().mutatePosts("init-loading");
      },

      setLoading: (v) => set({ loading: v }),

      posts: defaultData.posts,

      meta: defaultData.meta,

      params: defaultData.params,

      setParams: (v) => {
        return set((state) => ({
          params: { ...state.params, ...v },
        }));
      },

      getPosts: async (loading) => {
        const { params, setLoading } = get();

        setLoading(loading);
        const onFinally = () => setLoading("loaded");

        return await postServices.getPosts(params).finally(onFinally);
      },

      mutatePosts: async (loading) => {
        const { setPosts, getPosts, params, posts: prevPosts } = get();

        if (loading === "init-loading" && prevPosts.length > 0)
          return prevPosts;

        const { posts, totalPosts } = await getPosts(loading);

        const isLastPage = params.page * params.perPage >= totalPosts;
        set({ meta: { isLastPage, totalPosts } });

        setPosts(posts);

        return posts;
      },

      loadMorePosts: async () => {
        const {
          params,
          setParams,
          setPosts,
          posts: prevPosts,
          getPosts,
        } = get();
        setParams({ page: params.page + 1 });
        const { posts, totalPosts } = await getPosts("loading");

        const isLastPage =
          params.page * params.perPage + params.perPage >= totalPosts;
        set({ meta: { isLastPage, totalPosts } });

        setPosts([...prevPosts, ...posts]);
      },

      setPosts: (v) => set({ posts: v }),
    }),
    { name: "csr-posts-state" },
  ),
);

export { usePostsStore };
