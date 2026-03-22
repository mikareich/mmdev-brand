import { z } from "zod";
import { PRODUCTS } from "~/content/products";

export const contactSchema = z.object({
  product: z
    .string({
      required_error: "Please select a package",
      invalid_type_error: "Please select a package",
    })
    .trim()
    .min(1, "Please select a package")
    .refine((val: string) => PRODUCTS.some((p) => p.id.toString() === val), {
      message: "Invalid product package",
    }),
  email: z.string().trim().email("Invalid email address"),
  details: z
    .string({
      required_error: "Additional details are required",
    })
    .trim()
    .min(1, "Additional details are required"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
