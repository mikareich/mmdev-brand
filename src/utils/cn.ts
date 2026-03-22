import clsx, { type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge<"text-action">({
  extend: {
    classGroups: {
      "text-action": ["text-action"],
    },
  },
});

/** merges tailwind classes and ensures only the last conflicting class is kept */
export default function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
