export type PathsPostParams = {
  postId: number;
};

export const paths = {
  home: "/",
  ssrPosts: "/ssr-posts",
  csrPosts: "/csr-posts",
  post: ({ postId }: PathsPostParams): string => `/posts/${postId}`,
} as const;
