"use server";

import type { Product } from "~/content/products";
import { db } from "~/db";
import { contacts } from "~/db/schema";
import { sendEmail } from "~/email/sendEmail";
import { getConfirmationEmail } from "~/email/templates/confirmation";
import { type ContactSchema, contactSchema } from "~/utils/contactSchema";
import { getProductById } from "~/utils/getProductById";

export async function createProjectRequest(rawData: ContactSchema) {
  try {
    const { email, product: productId, details } = contactSchema.parse(rawData);

    const product = getProductById(Number(productId)) as Product;

    await db.transaction(async (db) => {
      const { subject, textContent, htmlContent } = getConfirmationEmail(
        product.name,
        details,
      );

      const emailResult = await sendEmail(
        email,
        subject,
        textContent,
        htmlContent,
      );

      if (!emailResult.success)
        throw new Error("Error while send the confirmation email!");

      await db.insert(contacts).values({
        email,
        product: productId,
        details,
        messageId: emailResult.messageId,
      });
    });

    return { success: true };
  } catch (_error) {
    return { success: false };
  }
}
