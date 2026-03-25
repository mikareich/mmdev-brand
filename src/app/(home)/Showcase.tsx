import Link from "next/link";
import BorderBox from "~/components/BorderBox";
import Section from "~/components/Section";
import { PRODUCTS } from "~/content/products";
import { PROJECTS } from "~/content/projects";

export default function Showcase() {
  return (
    <Section level={3} title="Showcase">
      {[
        <BorderBox
          key={0}
          asChild
          className="p-1 sm:p-2 border-theme-border-subtle col-span-full"
        >
          <p>
            A look at some of the digital experiences we've engineered. Every
            project is built to serve a specific purpose, delivering speed,
            accessibility, and scale without the bloat.
          </p>
        </BorderBox>,
        <div
          key={1}
          className="col-span-full columns-1 sm:columns-2 lg:columns-3 gap-4"
        >
          {PROJECTS.map((project, index) => {
            const product = PRODUCTS.find((p) => p.id === project.productId);
            return (
              <div
                key={project.title}
                className={`break-inside-avoid mb-4 inline-block w-full ${index >= 4 ? "mobile-hidden" : ""}`}
              >
                <BorderBox
                  asChild
                  className="px-2 py-1 sm:py-2 sm:px-4 bg-theme-background border-theme-border-subtle transition-colors"
                >
                  <article className="flex flex-col gap-1">
                    <header>
                      <h3 className="font-bold text-lg leading-normal">
                        {project.title}
                      </h3>

                      <span className="text-sm mt-0 text-theme-text-subtle uppercase font-medium">
                        {project.customer}
                        {product && ` — ${product.name}`}
                      </span>
                    </header>

                    <p className="line-clamp-3">{project.description}</p>

                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-action hover:underline w-fit"
                    >
                      Go to website
                    </Link>
                  </article>
                </BorderBox>
              </div>
            );
          })}
        </div>,
      ]}
    </Section>
  );
}
