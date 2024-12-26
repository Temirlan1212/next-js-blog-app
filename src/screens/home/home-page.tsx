import * as React from "react";
import { HTMLAttributes } from "react";
import { PostsCarousel } from "./posts-carousel";
import { CardTitle } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import { RecentPosts } from "./recent-posts";

export interface ComponentProps extends HTMLAttributes<HTMLElement> {}

export default function Component({ className, ...rest }: ComponentProps) {
  return (
    <div>
      <CardTitle>
        Posts carousel with{" "}
        <a
          target="_blank"
          href="https://tanstack.com/query/v5/docs/framework/react/overview"
          className="underline cursor-pointer hover:text-primary"
        >
          react-query
        </a>
      </CardTitle>

      <Separator className="my-5" />

      <PostsCarousel />

      <CardTitle className="mt-16">Recent 20 posts</CardTitle>

      <Separator className="my-5" />

      <RecentPosts params={{ perPage: 20, page: 1 }} />
    </div>
  );
}
