import { z } from "zod";
import { PRODUCTS } from "~/content/products";

export const contactSchema = z.object({
  product: z
    .string({
      message: "Please select a package",
    })
    .trim()
    .refine((val: string) => PRODUCTS.some((p) => p.id.toString() === val), {
      message: "Invalid product package",
    }),
  email: z.email("Invalid email address"),
  details: z
    .string({
      message: "Additional details are required",
    })
    .trim(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
