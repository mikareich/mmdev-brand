"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import Image from "next/image";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import UndrawDevelopment from "~/../public/undraw_development_s4gv.svg";
import { createProjectRequest } from "~/actions/contact";
import BorderBox from "~/components/BorderBox";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Section from "~/components/Section";
import Select from "~/components/Select";
import Textarea from "~/components/Textarea";
import { Toast } from "~/components/Toast";
import { PRODUCTS } from "~/content/products";
import { type ContactSchema, contactSchema } from "~/utils/contactSchema";

export default function Contact() {
  const [toastOpen, setToastOpen] = React.useState(false);
  const [toastConfig, setToastConfig] = React.useState<{
    title: string;
    description: string;
  }>({
    title: "",
    description: "",
  });

  const onSubmit = async (data: ContactSchema) => {
    const result = await createProjectRequest(data);

    if (result.success) {
      setToastConfig({
        title: "Request Sent!",
        description:
          "You should receive a confirmation email shortly. Please check your spam folder just in case.",
      });
    } else {
      setToastConfig({
        title: "Request Failed",
        description:
          "There was an issue sending your request. Please try again later.",
      });
    }

    setToastOpen(true);
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <Section level={4} title="Contact" className="grid-cols-1 sm:grid-cols-2">
      {[
        <BorderBox
          key={0}
          asChild
          className="p-1 sm:p-2 border-theme-border-subtle"
        >
          <div className="space-y-2 flex flex-col">
            <p>
              Ready to establish your online presence? Fill out the form with
              your project details, and we'll get back to you as soon as
              possible to discuss the next steps.
            </p>

            <Image
              src={UndrawDevelopment}
              alt=""
              className="aspect-square h-auto w-1/2"
            />
          </div>
        </BorderBox>,
        <BorderBox
          key={1}
          asChild
          className="p-1 sm:p-2 border-theme-border-subtle"
        >
          <Form.Root className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Form.Field name="product" className="flex flex-col gap-1">
              <Form.Label className="text-action">Product Package</Form.Label>

              <Controller
                control={control}
                name="product"
                render={({ field }) => (
                  <Select
                    id="product"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    placeholder="Select a package"
                    options={PRODUCTS.map((product) => ({
                      value: product.id.toString(),
                      label: `${product.name} — Starting at $${product.price}`,
                    }))}
                  />
                )}
              />

              {errors.product && (
                <Form.Message className="text-sm font-medium text-theme-destructive">
                  {errors.product.message}
                </Form.Message>
              )}
            </Form.Field>

            <Form.Field name="email" className="flex flex-col gap-1">
              <Form.Label className="text-action">Email</Form.Label>

              <Form.Control asChild>
                <Input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  {...register("email")}
                />
              </Form.Control>

              {errors.email && (
                <Form.Message className="text-sm font-medium text-theme-destructive">
                  {errors.email.message}
                </Form.Message>
              )}
            </Form.Field>

            <Form.Field name="details" className="flex flex-col gap-1">
              <Form.Label className="text-action">
                Additional Details
              </Form.Label>

              <Form.Control asChild>
                <Textarea
                  id="details"
                  rows={5}
                  placeholder="Tell us about your project goals and scope..."
                  {...register("details")}
                />
              </Form.Control>
              {errors.details && (
                <Form.Message className="text-sm font-medium text-theme-destructive">
                  {errors.details.message}
                </Form.Message>
              )}
            </Form.Field>

            <Form.Submit asChild>
              <Button
                type="submit"
                variant="filled"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Request..." : "Send Request"}
              </Button>
            </Form.Submit>
          </Form.Root>
        </BorderBox>,
      ]}
      <Toast
        open={toastOpen}
        onOpenChange={setToastOpen}
        title={toastConfig.title}
        description={toastConfig.description}
      />
    </Section>
  );
}
