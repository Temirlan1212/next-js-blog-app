import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/classnames";

const skeletonVariants = cva("", {
  variants: {
    variant: {
      default: "animate-pulse rounded-md bg-primary/10",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return (
    <div className={cn(skeletonVariants({ variant, className }))} {...props} />
  );
}

export { Skeleton, skeletonVariants };
