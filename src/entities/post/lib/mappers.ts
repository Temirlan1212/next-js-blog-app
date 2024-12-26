import { Post } from "../types";

const mapPost = (post: Partial<Post>): Post => {
  return {
    body: post?.body || "",
    title: post?.title || "",
    id: post?.id || 0,
    userId: post?.userId || 0,
  };
};

const postMappers = { mapPost };
export { postMappers };
