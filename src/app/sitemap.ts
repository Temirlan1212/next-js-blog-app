import { postServices } from "@/entities/post/api/services";
import { paths } from "@/shared/routing";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts } = await postServices.getPosts({
    perPage: 100,
    page: 1,
  });

  return posts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${paths.post({
      postId: post.id,
    })}`,
  }));
}
