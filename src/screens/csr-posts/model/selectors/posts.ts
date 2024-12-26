import { UsePostsStoreProps } from "../store/posts";

const postsSelectors = {
  selectLoading: (state: UsePostsStoreProps) => state.loading,
  selectSetLoading: (state: UsePostsStoreProps) => state.setLoading,
  selectParams: (state: UsePostsStoreProps) => state.params,
  selectSetParams: (state: UsePostsStoreProps) => state.setParams,
  selectPosts: (state: UsePostsStoreProps) => state.posts,
  selectSetPosts: (state: UsePostsStoreProps) => state.setPosts,
  selectMutatePosts: (state: UsePostsStoreProps) => state.mutatePosts,
  selectLoadMorePosts: (state: UsePostsStoreProps) => state.loadMorePosts,
  selectGetPosts: (state: UsePostsStoreProps) => state.getPosts,
  selectMeta: (state: UsePostsStoreProps) => state.meta,
  selectReset: (state: UsePostsStoreProps) => state.reset,
};

export { postsSelectors };
