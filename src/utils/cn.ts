import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** merges tailwind classes and ensures only the last conflicting class is kept */
export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
