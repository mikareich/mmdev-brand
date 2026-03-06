import Link from "next/link";
import cn from "~/utils/cn";
import { type ButtonProps, variants, base } from "./Button";

type LinkButtonProps = Omit<
    ButtonProps,
    keyof React.ButtonHTMLAttributes<HTMLButtonElement>
> &
    React.ComponentPropsWithoutRef<typeof Link>;

export default function LinkButton({
    children,
    variant,
    className,
    ...props
}: LinkButtonProps) {
    return (
        <Link className={cn(base, variants[variant], className)} {...props}>
            {children}
        </Link>
    );
}
