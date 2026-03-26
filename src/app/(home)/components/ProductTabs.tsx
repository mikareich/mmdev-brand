import * as Tabs from "@radix-ui/react-tabs";
import type React from "react";
import Button from "~/components/Button";
import { PRODUCTS } from "~/utils/products";

function ProductTabsRoot({ children }: { children: React.ReactNode }) {
  return (
    <Tabs.Root
      className="contents"
      defaultValue={PRODUCTS[0].id.toString()}
      dir="ltr"
      orientation="horizontal"
    >
      {children}
    </Tabs.Root>
  );
}

export function ProductTabsList() {
  return (
    <Tabs.List className="flex gap-2">
      {PRODUCTS.map((product) => (
        <Tabs.Trigger value={product.id.toString()} key={product.id} asChild>
          <Button
            variant="outlined"
            className="data-[state=active]:bg-taupe-600 data-[state=active]:text-taupe-100 data-[state=active]:border-taupe-600 transition-colors"
          >
            {product.name}
          </Button>
        </Tabs.Trigger>
      ))}
    </Tabs.List>
  );
}

export function ProductTabsContent() {
  return (
    <div className="h-full">
      {PRODUCTS.map((product) => (
        <Tabs.Content
          key={product.id}
          className="gap-2 h-full flex flex-col prose"
          value={product.id.toString()}
        >
          <div>{product.description}</div>

          <ol>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ol>

          <div className="uppercase text-right mt-auto">
            Starting at{" "}
            <span className="font-bold text-xl">${product.price}</span>
          </div>
        </Tabs.Content>
      ))}
    </div>
  );
}

const ProductTabs = Object.assign(ProductTabsRoot, {
  List: ProductTabsList,
  Content: ProductTabsContent,
});

export default ProductTabs;
