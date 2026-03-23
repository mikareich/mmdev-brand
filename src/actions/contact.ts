"use server";

import { db } from "~/db";
import { contacts } from "~/db/schema";
import { type ContactSchema, contactSchema } from "~/utils/contactSchema";

export async function createProjectRequest(data: ContactSchema) {
  try {
    const validData = contactSchema.parse(data);

    await db.insert(contacts).values({
      email: validData.email,
      product: validData.product,
      details: validData.details,
    });

    return { success: true };
  } catch (_error) {
    return { success: false };
  }
}
