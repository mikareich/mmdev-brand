import Link from "next/link";
import BorderBox from "~/components/BorderBox";
import { PRODUCTS } from "~/utils/products";
import { PROJECTS } from "~/utils/projects";

export default function ProjectList() {
  return (
    <div className="col-span-full columns-1 sm:columns-2 lg:columns-3 gap-4">
      {PROJECTS.map((project) => {
        const product = PRODUCTS.find((p) => p.id === project.productId);

        return (
          <div
            key={project.title}
            className="break-inside-avoid mb-4 inline-block w-full"
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
    </div>
  );
}
