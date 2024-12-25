import { api } from "@/shared/lib/api";
import { Post } from "../types";
import { API_END_POINTS } from "@/shared/lib/end-points";
import { GetPostsParams } from "@/shared/lib/end-points/post";

export type GetPostsReturnType = {
  posts: Post[];
  totalPosts: number;
  error: Error | null;
};

async function getPosts(params: GetPostsParams): Promise<GetPostsReturnType> {
  const res = await api.json<Post[]>(API_END_POINTS.post.getPosts(params));

  if (res.ok) {
    const posts = res.result;
    const totalPosts = parseInt(
      res.response.headers.get("X-Total-Count") || "0"
    );
    return { posts, totalPosts, error: null };
  } else return { posts: [], totalPosts: 0, error: res.error };
}

const postServices = {
  getPosts,
};

export { postServices };
