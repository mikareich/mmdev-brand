import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import type React from "react";
import BorderBox from "~/components/BorderBox";
import Section from "~/components/Section";

const globalComponents = {
  BorderBox,
  Section,
  img: (props: React.ComponentProps<"img">) => (
    <Image
      {...props}
      src={typeof props.src === "string" ? props.src : ""}
      alt={props.alt || ""}
      width={500}
      height={500}
    />
  ),
};

export async function getMdxContent(
  source: string,
  localComponents: Record<string, React.ElementType> = {},
) {
  const allComponents = {
    ...globalComponents,
    ...localComponents,
  };

  const { content } = await compileMDX({
    source,
    components: allComponents,
  });

  return content;
}
