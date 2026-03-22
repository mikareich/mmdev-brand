import { Slot } from "radix-ui";
import cn from "~/utils/cn";

type BorderBoxProps = React.ComponentProps<"div"> & {
  asChild?: boolean;
};

export default function BorderBox({
  asChild,
  children,
  className,
  ...props
}: BorderBoxProps) {
  const Inner = asChild ? Slot.Root : "div";

  return (
    <div
      className={cn(
        "relative box-border border border-solid border-inherit bg-inherit",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute -left-px -top-[100vmax] -bottom-[100vmax] z-[-1] w-px border-l border-solid border-inherit" />
      <span className="pointer-events-none absolute -right-px -top-[100vmax] -bottom-[100vmax] z-[-1] w-px border-r border-solid border-inherit" />
      <span className="pointer-events-none absolute -top-px -left-[100vmax] -right-[100vmax] z-[-1] h-px border-t border-solid border-inherit" />
      <span className="pointer-events-none absolute -bottom-px -left-[100vmax] -right-[100vmax] z-[-1] h-px border-b border-solid border-inherit" />

      <Inner className="relative z-10 h-full w-full overflow-clip bg-inherit">
        {children}
      </Inner>
    </div>
  );
}
