import type React from "react";
import cn from "~/utils/cn";

export type InputProps = React.ComponentProps<"input">;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "px-4 py-2 border border-theme-border-subtle bg-theme-background hover:bg-theme-background-accent focus:bg-theme-background-accent text-sm focus:outline-none focus:border-theme-border transition-colors",
        className,
      )}
      {...props}
    />
  );
}
