import * as React from "react";
import { HTMLAttributes } from "react";
import { CardTitle } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import dynamic from "next/dynamic";
import { Button } from "@/shared/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { paths } from "@/shared/routing";

const PostsCarousel = dynamic(() => import("./posts-carousel"), {
  ssr: false,
  loading: ({ isLoading }) => (isLoading ? <div> loading..</div> : null),
});
const RecentPosts = dynamic(() => import("./recent-posts"), {
  ssr: false,
  loading: ({ isLoading }) => (isLoading ? <div> loading..</div> : null),
});

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

      <div className="flex items-center justify-between mt-16">
        <CardTitle>Recent 20 posts</CardTitle>
        <Link href={paths.csrPosts}>
          <Button
            className="group"
            rightIcon={
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            }
          >
            See all
          </Button>
        </Link>
      </div>

      <Separator className="my-5" />

      <RecentPosts params={{ perPage: 20, page: 1 }} />
    </div>
  );
}
