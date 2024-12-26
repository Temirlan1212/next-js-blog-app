import * as React from "react";
import { PostsList } from "../ssr-posts";
import { postServices } from "@/entities/post/api/services";
import { GetPostsParams } from "@/shared/lib/end-points/post";

export interface RecentPostsProps {
  params: GetPostsParams;
}

export default async function RecentPosts({ params }: RecentPostsProps) {
  const { posts } = await postServices.getPosts({
    page: params?.page || 1,
    perPage: params?.perPage || 10,
  });

  return <PostsList posts={posts} />;
}
