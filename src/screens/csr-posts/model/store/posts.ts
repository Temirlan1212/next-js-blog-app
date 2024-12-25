import { GetPostsReturnType, postServices } from "@/entities/post/api/services";
import { Post } from "@/entities/post/types";
import { PostParams } from "@/shared/lib/end-points/post";
import { LoadingStatus } from "@/shared/lib/types";
import { create } from "zustand";

export const searchFields = ["title_like"];

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
  meta: {
    totalPosts: number;
    isLastPage: boolean;
  };
}

const usePostsStore = create<UsePostsStoreProps>()((set, get) => ({
  loading: "init",
  setLoading: (v) => set({ loading: v }),

  meta: {
    totalPosts: 0,
    isLastPage: false,
  },

  params: {
    page: 1,
    perPage: 10,
    search: { fields: searchFields, value: "" },
  },

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
    const { setPosts, getPosts, params } = get();

    const { posts, totalPosts } = await getPosts(loading);

    const isLastPage = params.page * params.perPage >= totalPosts;
    set({ meta: { isLastPage, totalPosts } });

    setPosts(posts);

    return posts;
  },

  loadMorePosts: async () => {
    const { params, setParams, setPosts, posts: prevPosts, getPosts } = get();
    setParams({ page: params.page + 1 });
    const { posts, totalPosts } = await getPosts("loading");

    const isLastPage =
      params.page * params.perPage + params.perPage >= totalPosts;
    set({ meta: { isLastPage, totalPosts } });

    setPosts([...prevPosts, ...posts]);
  },

  posts: [],
  setPosts: (v) => set({ posts: v }),
}));

export { usePostsStore };
