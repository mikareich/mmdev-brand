import cn from "~/utils/cn";

type ButtonVariant = "Outline" | "Filled" | "Ghost";

export const base = "px-3 py-2 cursor-pointer transition-colors";
export const variants: Record<ButtonVariant, string> = {
    Filled: "bg-taupe-600 text-taupe-100 hover:bg-taupe-500",
    Outline: "bg-transparent text-taupe-500 border-1 border-taupe-600",
    Ghost: "bg-transparent text-taupe-500 hover:text-taupe-600",
};

export type ButtonProps = {
    children: React.ReactNode;
    variant: ButtonVariant;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    children,
    variant,
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
