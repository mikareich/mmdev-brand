"use client";

import * as Tabs from "@radix-ui/react-tabs";
import BorderBox from "~/components/BorderBox";
import Button from "~/components/Button";
import Section from "~/components/Section";
import { PRODUCTS } from "~/content/products";

export default function OurProducts() {
  return (
    <Tabs.Root defaultValue={PRODUCTS[0].id.toString()}>
      <Section
        level={2}
        title="Our Products"
        headerActions={
          <Tabs.List className="flex gap-2">
            {PRODUCTS.map((product) => (
              <Tabs.Trigger
                value={product.id.toString()}
                key={product.id}
                asChild
              >
                <Button variant="outlined">{product.name}</Button>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        }
        contents={[
          <BorderBox
            asChild
            className="p-1 sm:p-2 border-theme-border-subtle"
            key={1}
          >
            <div>
              Our packages—Postcard, Letter, and Parcel—give you exactly what
              you need with zero bloat. Our process is just as simple:
              <ol className="list-decimal list-inside">
                <li>Align: We define your goals and scope.</li>
                <li>Build: We engineer a fast, modern site.</li>
                <li>Launch: We deploy your site and hand you the keys.</li>
              </ol>
            </div>
          </BorderBox>,
          <BorderBox
            asChild
            className="p-1 sm:p-2 border-theme-border-subtle"
            key={2}
          >
            <div>
              {PRODUCTS.map((product) => (
                <Tabs.Content key={product.id} value={product.id.toString()}>
                  <p>{product.description}</p>

                  <ol className="list-decimal list-inside">
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ol>

                  <p className="mt-2 uppercase text-right">
                    Starting at{" "}
                    <span className="font-bold text-xl">${product.price}</span>
                  </p>
                </Tabs.Content>
              ))}
            </div>
          </BorderBox>,
        ]}
      />
    </Tabs.Root>
  );
}
