"use client";

import * as Tabs from "@radix-ui/react-tabs";
import React from "react";
import BorderBox from "~/components/BorderBox";
import Button from "~/components/Button";
import Section from "~/components/Section";
import { PRODUCTS } from "~/content/products";

export default function OurProducts() {
  const [activeTab, setActiveTab] = React.useState(PRODUCTS[0].id.toString());
  return (
    <Tabs.Root
      defaultValue={activeTab}
      value={activeTab}
      onValueChange={(tabId) => setActiveTab(tabId)}
    >
      <Section
        level={2}
        title="Our Products"
        headerActions={
          <>
            {/* TODO: Substitute with already implemented selection component */}
            <select
              className="sm:hidden border-theme-border bg-theme-background p-1"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {PRODUCTS.map((product) => (
                <option key={product.id} value={product.id.toString()}>
                  {product.name}
                </option>
              ))}
            </select>
            <Tabs.List className="hidden sm:flex gap-2">
              {PRODUCTS.map((product) => (
                <Tabs.Trigger
                  value={product.id.toString()}
                  key={product.id}
                  asChild
                >
                  <Button
                    variant={
                      product.id.toString() === activeTab
                        ? "filled"
                        : "outlined"
                    }
                  >
                    {product.name}
                  </Button>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </>
        }
      >
        {[
          <BorderBox
            asChild
            className="p-1 sm:p-2 border-theme-border-subtle"
            key={1}
          >
            <div>
              Our packages—Postcard, Letter, and Parcel—give you exactly what
              you need with zero bloat. Our process is just as simple:
              <ol className="list-disc marker:text-taupe-400 list-inside">
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
            <div className="grid">
              {PRODUCTS.map((product) => (
                <Tabs.Content
                  forceMount
                  key={product.id}
                  className="gap-2 col-start-1 row-start-1 data-[state=inactive]:opacity-0 h-full flex flex-col"
                  value={product.id.toString()}
                >
                  <p>{product.description}</p>

                  <ol className="list-decimal marker:text-taupe-400 list-inside">
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ol>

                  <p className="uppercase text-right mt-auto">
                    Starting at{" "}
                    <span className="font-bold text-xl">${product.price}</span>
                  </p>
                </Tabs.Content>
              ))}
            </div>
          </BorderBox>,
        ]}
      </Section>
    </Tabs.Root>
  );
}
