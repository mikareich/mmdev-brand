import cn from "~/utils/cn";

type BorderBoxProps = React.ComponentProps<"div">;

export default function BorderBox({
  children,
  className,
  ...props
}: BorderBoxProps) {
  return (
    <div
      className={cn("relative box-border p-px border-0", className)}
      {...props}
    >
      {/* left guide */}
      <span className="pointer-events-none absolute left-0 top-1/2 z-0 h-[200vh] w-px -translate-y-1/2 border-[0.25px] border-inherit" />

      {/* right guide */}
      <span className="pointer-events-none absolute right-0 top-1/2 z-0 h-[200vh] w-px -translate-y-1/2 border-[0.25px] border-inherit" />

      {/* top guide */}
      <span className="pointer-events-none absolute left-1/2 top-0 z-0 h-px w-[200vmax] -translate-x-1/2 border-[0.25px] border-inherit" />

      {/* bottom guide */}
      <span className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-px w-[200vmax] -translate-x-1/2 border-[0.25px] border-inherit" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
