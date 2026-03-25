import type React from "react";
import cn from "~/utils/cn";

export type TextareaProps = React.ComponentProps<"textarea">;

export default function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "px-4 py-2 min-h-32 resize-y border border-theme-border-subtle bg-theme-background hover:bg-theme-background-accent focus:bg-theme-background-accent text-sm focus:outline-none focus:border-theme-border transition-colors",
        className,
      )}
      {...props}
    />
  );
}
