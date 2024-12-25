"use client";
import { Input, InputProps } from "@/ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Button } from "@/ui/button";
import { Search } from "lucide-react";
import { cn } from "../lib/classnames";

export interface SearchBarProps {
  debounceDelay?: number;
  loading?: boolean;
  onDebounceChange?: (value: string) => void;
  className?: string;
  inputProps: Pick<InputProps, "placeholder" | "className"> & {
    defaultValue?: string;
  };
}

export function SearchBar({
  debounceDelay = 500,
  loading,
  onDebounceChange,
  className,
  inputProps,
}: SearchBarProps) {
  const [didMount, setDidMount] = useState(false);
  const [text, setText] = useState(inputProps.defaultValue || "");
  const [value] = useDebounce(text, debounceDelay);

  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    if (didMount && onDebounceChange) onDebounceChange(value);
  }, [value]);

  return (
    <div className={cn("mx-0", className)}>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        {inputProps.placeholder || "Поиск"}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="w-[20px] h-[20px] text-muted-foreground" />
        </div>
        <Input
          type="search"
          value={text}
          onChange={(event) => setText(event.target.value)}
          {...inputProps}
          className={cn("ps-10", inputProps.className)}
          tabIndex={-1}
        />
        {loading && (
          <Button
            variant={"ghost"}
            className="absolute top-[1px] right-1 w-[5px] h-[94%] bg-white opacity-1"
            loading={loading}
            disabled={false}
          />
        )}
      </div>
    </div>
  );
}