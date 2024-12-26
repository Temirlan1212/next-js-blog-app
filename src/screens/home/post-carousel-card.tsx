"use client";

import * as React from "react";
import { HTMLAttributes } from "react";
import { Card, CardDescription, CardTitle } from "@/shared/ui/card";
import { cn } from "@/shared/lib/classnames";
import { Post } from "@/entities/post/types";

export interface PostCarouselCardProps extends HTMLAttributes<HTMLElement> {
  data: Post;
  cardClassName?: string;
}

export function PostCarouselCard({
  className,
  data: item,
  cardClassName,
  children,
  ...rest
}: React.PropsWithChildren<PostCarouselCardProps>) {
  return (
    <div {...rest}>
      <Card
        className={cn(
          "w-78 h-52 bg-muted p-3 border-none grow sm:grow-0 hover:shadow-sm hover:bg-muted/[.7] cursor-pointer flex flex-col justify-between gap-2",
          cardClassName || "",
        )}
      >
        <div>
          <div className="flex flex-row items-center gap-2 p-2">
            <CardTitle className="truncate">{item.title}</CardTitle>
          </div>

          <CardDescription className="truncate">
            {item.body}
            {/* {truncateText({ text: item.description, maxLength: 100 })} */}
          </CardDescription>
        </div>

        {children}
      </Card>
    </div>
  );
}
