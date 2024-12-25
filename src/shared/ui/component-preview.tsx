"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { cn } from "@/shared/lib/classnames";
import { CodeBlock } from "./code-block";
import { CopyButton } from "./copy-button";
import { CardDescription, CardTitle } from "./card";

type TabsSharedProps = {
  tabTitle: string;
  tabValue: string;
  title?: string;
  description?: string;
};

type TabsCodeVariant = {
  type: "code";
  content: string;
} & TabsSharedProps;

type TabsNodeVariant = {
  type: "node";
  content: React.ReactNode;
} & TabsSharedProps;

export interface ComponentPreviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tabs: (TabsCodeVariant | TabsNodeVariant)[];
}

export function ComponentPreview({
  className,
  tabs = [],
  ...props
}: ComponentPreviewProps) {
  if (tabs.length < 1) return null;
  const language = "jsx";
  const triggers = tabs.map(({ tabTitle, tabValue }) => {
    return { title: tabTitle, value: tabValue };
  });
  const defaultValue = tabs[0].tabValue;
  return (
    <div
      className={cn("my-4 flex flex-col space-y-4 relative", className)}
      {...props}
    >
      <Tabs defaultValue={defaultValue} className="w-full">
        <TabsList className="flex border border-secondary w-fit mb-4">
          {triggers.map(({ title, value }, index) => (
            <TabsTrigger value={value} key={index + value}>
              {title}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(({ content, tabValue, type, ...rest }, index) => {
          if (type === "code") {
            const title = rest?.title || rest.tabTitle;
            const description = rest?.description || "";
            return (
              <TabsContent
                key={index + tabValue}
                value={tabValue}
                className="rounded-md bg-card"
              >
                <div className="px-5 py-2 flex justify-between items-center gap-3 flex-wrap">
                  <div>
                    {title && <CardTitle>{title}</CardTitle>}
                    {description && (
                      <CardDescription className="mt-3 text-md">
                        {rest.description}
                      </CardDescription>
                    )}
                  </div>

                  <CopyButton className="rounded-full " value={content} />
                </div>

                <div className="border-b border-secondary" />

                <div className="overflow-y-auto">
                  <CodeBlock code={content} language={language} />
                </div>
              </TabsContent>
            );
          }

          return (
            <TabsContent
              key={index + tabValue}
              value={tabValue}
              className="p-4 border border-secondary rounded-md bg-card"
            >
              {rest?.title && <CardTitle>{rest.title}</CardTitle>}

              {rest?.description && (
                <CardDescription className="mt-3 text-md">
                  {rest.description}
                </CardDescription>
              )}

              <div className="border-b border-secondary my-4" />
              {content}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
