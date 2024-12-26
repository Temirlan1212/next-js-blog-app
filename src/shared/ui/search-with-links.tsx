"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchBar } from "@/shared/ui/search-bar";
import { Button } from "./button";
import Link from "next/link";
import { useState } from "react";

export interface SearchWithLinks {
  defaultValue: string;
}

export function SearchWithLinks({ defaultValue }: SearchWithLinks) {
  const [value, setValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setSearchValue = (value: string) => {
    const key = "search";
    const newSearchParams = new URLSearchParams(searchParams || undefined);
    newSearchParams.set(key, String(value));
    router.refresh();
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  const buildLink = (value: string) => {
    const key = "search";
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, String(value));
    return `${pathname}?${newSearchParams.toString()}`;
  };

  return (
    <div className="w-full flex gap-2 items-center">
      <SearchBar
        className="w-full"
        debounceDelay={0}
        onDebounceChange={(v) => {
          setValue(v);
          if (!v) setSearchValue("");
        }}
        inputProps={{ placeholder: "Search...", defaultValue: defaultValue }}
      />

      <Link href={buildLink(value)}>
        <Button>search</Button>
      </Link>
    </div>
  );
}
