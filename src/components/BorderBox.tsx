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
      className={cn("relative box-border p-px border-0 bg-inherit", className)}
      {...props}
    >
      {/* left guide */}
      <span className="pointer-events-none absolute left-0 top-1/2 z-0 h-screen w-px -translate-y-1/2 border-[0.25px] border-inherit" />

      {/* right guide */}
      <span className="pointer-events-none absolute right-0 top-1/2 z-0 h-screen w-px -translate-y-1/2 border-[0.25px] border-inherit" />

      {/* top guide */}
      <span className="pointer-events-none absolute left-1/2 top-0 z-0 h-px w-[200vmax] -translate-x-1/2 border-[0.25px] border-inherit" />

      {/* bottom guide */}
      <span className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-px w-[200vmax] -translate-x-1/2 border-[0.25px] border-inherit" />

      <Inner className="relative z-10">{children}</Inner>
    </div>
  );
}
