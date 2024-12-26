import { Post, PostComment } from "../types";

const mapPost = (post: Partial<Post>): Post => {
  return {
    body: post?.body || "",
    title: post?.title || "",
    id: post?.id || 0,
    userId: post?.userId || 0,
  };
};

const mapPostComment = (postComment: Partial<PostComment>): PostComment => {
  const { title, ...mappedPost } = mapPost(postComment);
  return {
    ...mappedPost,
    postId: postComment?.postId || 0,
    name: postComment?.name || "",
  };
};

const postMappers = { mapPost, mapPostComment };
export { postMappers };
