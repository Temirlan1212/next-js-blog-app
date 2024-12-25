"use client";
import { useQuery } from "@tanstack/react-query";
import { postServices } from "./services";
import { API_END_POINTS } from "@/shared/lib/end-points";
import { GetPostsParams } from "@/shared/lib/end-points/post";

const useGetPosts = (params: GetPostsParams) => {
  const queryKey = [API_END_POINTS.post.getPosts(params)];
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      return await postServices.getPosts(params);
    },
  });

  return {
    ...query,
    data: query.data,
    queryKey,
  };
};

const postQueries = {
  useGetPosts,
};

export { postQueries };
