import type React from "react";
import { isValidElement } from "react";
import cn from "~/utils/cn";
import { zeroPad } from "~/utils/zeroPad";
import BorderBox from "./BorderBox";

type SectionProps = {
  level: number;
  title: string;
  headerActions?: React.ReactNode;
  contents: React.ReactNode[];
} & React.ComponentProps<"section">;

export default function Section({
  className,
  level,
  title,
  headerActions,
  contents,
  ...props
}: SectionProps) {
  return (
    <BorderBox className="border-theme-border">
      <section
        className={cn(
          `w-fill p-2 sm:p-4 bg-theme-background-accent overflow-hidden grid gap-4
          ${headerActions ? "grid-cols-2" : "grid-cols-1"}`,
          className,
        )}
        {...props}
      >
        <BorderBox className="grid grid-cols-subgrid col-span-full py-1 sm:py-2 leading-none border-theme-border-subtle">
          <h2 className="flex gap-2 font-bold text-2xl">
            <span className="text-theme-text-subtle">{zeroPad(level)}</span>
            <span className="text-theme-text-subtle">/</span>
            <span className="text-theme-text uppercase">{title}</span>
          </h2>

          {headerActions}
        </BorderBox>

        {contents.map((content) => {
          if (!isValidElement<React.ReactElement>(content)) return null;

          return (
            <BorderBox className="border-theme-border-subtle" key={content.key}>
              {content}
            </BorderBox>
          );
        })}
      </section>
    </BorderBox>
  );
}
