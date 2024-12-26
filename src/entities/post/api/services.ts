import { api } from "@/shared/lib/api";
import { Post, PostComment } from "../types";
import { API_END_POINTS } from "@/shared/lib/end-points";
import {
  GetPostCommentsParams,
  GetPostParams,
  GetPostsParams,
} from "@/shared/lib/end-points/post";
import { postMappers } from "../lib/mappers";

export type GetPostsReturnType = {
  posts: Post[];
  totalPosts: number;
  error: Error | null;
};

export type GetPostReturnType = {
  post: Post;
  error: Error | null;
};

export type GetPostCommentsReturnType = {
  comments: PostComment[];
  error: Error | null;
};

async function getPosts(params: GetPostsParams): Promise<GetPostsReturnType> {
  const res = await api.json<Post[]>(API_END_POINTS.post.getPosts(params));

  if (res.ok) {
    const posts = res.result;
    const totalPosts = parseInt(
      res.response.headers.get("X-Total-Count") || "0",
    );
    return { posts, totalPosts, error: null };
  } else return { posts: [], totalPosts: 0, error: res.error };
}

async function getPost(params: GetPostParams): Promise<GetPostReturnType> {
  const res = await api.json<Post>(API_END_POINTS.post.getPost(params));

  if (res.ok) {
    const post = res.result;
    return { post: postMappers.mapPost(post), error: null };
  } else return { post: postMappers.mapPost({}), error: res.error };
}

async function getPostComments(
  params: GetPostCommentsParams,
): Promise<GetPostCommentsReturnType> {
  const res = await api.json<PostComment[]>(
    API_END_POINTS.post.getPostComments(params),
  );

  if (res.ok) {
    const comments = res.result;

    return { comments, error: null };
  } else return { comments: [], error: res.error };
}

const postServices = {
  getPosts,
  getPost,
  getPostComments,
};

export { postServices };
