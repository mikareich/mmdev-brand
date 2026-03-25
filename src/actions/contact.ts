"use server";

import { eq } from "drizzle-orm";
import type { Product } from "~/content/products";
import { PROFILES } from "~/content/profiles";
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
      const [newContact] = await db
        .insert(contacts)
        .values({
          email,
          product: productId,
          details,
        })
        .returning();

      const { subject, textContent, htmlContent } = getConfirmationEmail(
        product.name,
        details,
      );

      const emailResult = await sendEmail(
        [email],
        subject,
        textContent,
        htmlContent,
        [PROFILES[0].email, PROFILES[1].email],
      );

      if (!emailResult.success)
        throw new Error("Error while send the confirmation email!");

      await db
        .update(contacts)
        .set({ messageId: emailResult.messageId })
        .where(eq(contacts.id, newContact.id));
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
