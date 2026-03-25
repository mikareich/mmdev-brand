"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import * as ToastPrimitive from "@radix-ui/react-toast";
import type React from "react";
import Button from "./Button";

interface ToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: React.ReactNode;
}

export function Toast({ open, onOpenChange, title, description }: ToastProps) {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        className="pointer-events-auto relative space-y-1 border px-4 py-3 bg-theme-background border-theme-border"
      >
        {title && (
          <ToastPrimitive.Title className="text-action font-heading">
            {title}
          </ToastPrimitive.Title>
        )}

        {description && (
          <ToastPrimitive.Description className="text-sm">
            {description}
          </ToastPrimitive.Description>
        )}

        <ToastPrimitive.Close asChild>
          <Button variant="ghost" className="absolute right-2 top-2 px-2">
            <Cross2Icon className="size-4" />
          </Button>
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-100 max-w-md p-4 space-y-2" />
    </ToastPrimitive.Provider>
  );
}
