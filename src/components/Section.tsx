import { Slot } from "radix-ui";
import React from "react";
import cn from "~/utils/cn";
import { zeroPad } from "~/utils/zeroPad";
import BorderBox from "./BorderBox";

type SectionRootProps = React.ComponentProps<"section"> & {
  asChild?: boolean;
};

function isComponentType(child: React.ReactNode, displayName: string) {
  if (!React.isValidElement(child)) return false;
  const type = child.type as { displayName?: string };
  return type.displayName === displayName;
}

function SectionRoot({ className, children, ...props }: SectionRootProps) {
  let titleElement: React.ReactNode = null;
  let actionsElement: React.ReactNode = null;
  const contentElements: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (isComponentType(child, "SectionTitle")) {
      titleElement = child;
    } else if (isComponentType(child, "SectionActions")) {
      actionsElement = child;
    } else if (isComponentType(child, "SectionContent")) {
      contentElements.push(child);
    }
  });

  const hasHeader = titleElement || actionsElement;

  return (
    <BorderBox className="border-theme-border" asChild>
      <section
        className={cn(
          "w-full p-2 sm:p-4 bg-theme-background-accent overflow-hidden grid gap-4",
          className,
        )}
        {...props}
      >
        {hasHeader && (
          <BorderBox
            asChild
            className="col-span-full p-1 sm:p-2 leading-none border-theme-border-subtle"
          >
            <div
              className={cn(
                "grid items-center w-full",
                actionsElement ? "grid-cols-2" : "grid-cols-1",
              )}
            >
              {titleElement}
              {actionsElement}
            </div>
          </BorderBox>
        )}
        {contentElements}
      </section>
    </BorderBox>
  );
}
SectionRoot.displayName = "SectionRoot";

type SectionTitleProps = React.ComponentProps<"div"> & {
  level: number | string;
  asChild?: boolean;
};

function SectionTitleComponent({
  className,
  level,
  children,
  asChild,
  ...props
}: SectionTitleProps) {
  const Comp = asChild ? Slot.Root : "h2";

  return (
    <Comp
      className={cn(
        "flex gap-2 font-bold text-2xl font-heading items-center",
        className,
      )}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          <span className="text-theme-text-subtle">
            {zeroPad(Number(level))}
          </span>
          <span className="text-theme-text-subtle">/</span>
          <span className="text-theme-text uppercase">{children}</span>
        </>
      )}
    </Comp>
  );
}

const SectionTitle = Object.assign(SectionTitleComponent, {
  displayName: "SectionTitle",
});

type SectionActionsProps = React.ComponentProps<"div"> & {
  asChild?: boolean;
};

function SectionActionsComponent({
  className,
  children,
  asChild,
  ...props
}: SectionActionsProps) {
  const Comp = asChild ? Slot.Root : "div";
  return (
    <Comp
      className={cn("justify-self-end flex items-center", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

const SectionActions = Object.assign(SectionActionsComponent, {
  displayName: "SectionActions",
});

type SectionContentProps = React.ComponentProps<"div"> & {
  asChild?: boolean;
};

function SectionContentComponent({
  className,
  children,
  asChild,
  ...props
}: SectionContentProps) {
  if (asChild) {
    return (
      <Slot.Root className={className} {...props}>
        {children}
      </Slot.Root>
    );
  }

  return (
    <BorderBox
      className={cn("p-1 sm:p-2 border-theme-border-subtle", className)}
    >
      <div className="prose" {...props}>
        {children}
      </div>
    </BorderBox>
  );
}

const SectionContent = Object.assign(SectionContentComponent, {
  displayName: "SectionContent",
});

export const Section = Object.assign(SectionRoot, {
  Title: SectionTitle,
  Actions: SectionActions,
  Content: SectionContent,
});

export default Section;
