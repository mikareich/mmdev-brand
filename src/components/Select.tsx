"use client";

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import type * as React from "react";
import cn from "~/utils/cn";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = Omit<
  React.ComponentProps<typeof SelectPrimitive.Root>,
  "children"
> & {
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  id?: string;
};

export default function Select({
  options,
  placeholder = "Select...",
  className,
  id,
  ...props
}: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        id={id}
        className={cn(
          "flex w-full items-center justify-between px-4 py-2 border border-theme-border-subtle bg-theme-background hover:bg-theme-background-accent focus:bg-theme-background-accent text-sm focus:outline-none focus:border-theme-border transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-placeholder:text-theme-text-subtle",
          className,
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <ChevronDownIcon className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="relative z-50 max-h-96 min-w-32 overflow-hidden border border-theme-border-subtle bg-theme-background text-theme-text data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
          position="popper"
        >
          <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
            <ChevronUpIcon className="h-4 w-4" />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport className="p-1 h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                className="relative flex w-full cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-theme-background-accent focus:text-theme-text data-disabled:pointer-events-none data-disabled:opacity-50 transition-colors"
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  <SelectPrimitive.ItemIndicator>
                    <CheckIcon className="h-4 w-4" />
                  </SelectPrimitive.ItemIndicator>
                </span>
                <SelectPrimitive.ItemText>
                  {option.label}
                </SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
            <ChevronDownIcon className="h-4 w-4" />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
