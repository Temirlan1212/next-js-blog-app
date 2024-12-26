"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import { HTMLAttributes } from "react";
import { paths } from "@/shared/routing";
import { postQueries } from "@/entities/post/api/queries";
import { PostCarouselCard } from "./post-carousel-card";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

export interface PostsCarouselProps extends HTMLAttributes<HTMLElement> {}

export default function PostsCarousel({
  className,
  ...rest
}: PostsCarouselProps) {
  const getPostsQuery = postQueries.useGetPosts({});
  const { data } = getPostsQuery;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data?.posts.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/1 mobile:basis-1/2 md:basis-1/4"
          >
            <PostCarouselCard
              data={item}
              cardClassName="w-full max-w-60 mobile:max-w-xl"
            >
              <Link href={paths.post({ postId: item.id })}>
                <Button className="w-full">Link to detail page</Button>
              </Link>
            </PostCarouselCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
