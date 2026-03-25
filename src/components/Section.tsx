import type React from "react";
import cn from "~/utils/cn";
import { zeroPad } from "~/utils/zeroPad";
import BorderBox from "./BorderBox";

type SectionProps = {
  level: number;
  title: string;
  headerActions?: React.ReactNode;
  children: React.ReactNode[];
} & React.ComponentProps<"section">;

export default function Section({
  className,
  level,
  title,
  headerActions,
  children: contents,
  ...props
}: SectionProps) {
  const hasActions = !!headerActions;
  const id = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <BorderBox className="border-theme-border" asChild>
      <section
        className={cn(
          "w-fill p-2 sm:p-4 bg-theme-background-accent overflow-hidden grid gap-4",
          hasActions ? "lg:grid-cols-2" : "grid-cols-1",
          className,
        )}
        id={id}
        {...props}
      >
        <BorderBox
          asChild
          className="col-span-full p-1 sm:p-2 leading-none border-theme-border-subtle"
        >
          <div
            className={cn(
              hasActions && "grid grid-cols-[1fr_auto] items-center gap-2",
            )}
          >
            <h2 className="flex gap-2 font-bold text-2xl font-heading w-full">
              <span className="text-theme-text-subtle">{zeroPad(level)}</span>
              <span className="text-theme-text-subtle">/</span>
              <span className="text-theme-text uppercase truncate">{title}</span>
            </h2>
            {hasActions && (
              <div className="justify-self-end">{headerActions}</div>
            )}
          </div>
        </BorderBox>

        {contents}
      </section>
    </BorderBox>
  );
}
