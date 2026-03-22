"use server";

import { type ContactSchema, contactSchema } from "~/utils/contactSchema";

export async function createProjectRequest(data: ContactSchema) {
  try {
    contactSchema.parse(data);

    return { success: true };
  } catch (_error) {
    return { success: false };
  }
}
