import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import cn from "~/utils/cn";

export const buttonVariants = cva(
  "px-4 py-2 cursor-pointer transition-colors",
  {
    variants: {
      variant: {
        filled:
          "bg-taupe-600 text-taupe-100 hover:bg-taupe-500 text-sm text-action border-1 border-taupe-600",
        outlined:
          "bg-transparent text-taupe-500 border-1 border-taupe-300 text-sm text-action hover:bg-taupe-100",
        ghost: "bg-transparent text-taupe-500 hover:text-taupe-600",
      },
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> & {
  variant: "filled" | "ghost" | "outlined";
  asChild?: boolean;
};

export default function Button({
  className,
  variant,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      type={asChild ? undefined : props.type || "button"}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}
