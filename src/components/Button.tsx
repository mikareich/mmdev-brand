import cn from "~/utils/cn";

type ButtonVariant = "outlined" | "filled" | "ghost";

export const base = "px-4 py-2 cursor-pointer transition-colors";

export const variants: Record<ButtonVariant, string> = {
  filled: "bg-taupe-600 text-taupe-100 hover:bg-taupe-500",
  outlined:
    "bg-transparent text-taupe-500 border-1 border-taupe-300 text-sm font-medium uppercase hover:bg-taupe-100",
  ghost: "bg-transparent text-taupe-500 hover:text-taupe-600",
};

export type ButtonProps = {
  children: React.ReactNode;
  variant: ButtonVariant;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "filled",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
