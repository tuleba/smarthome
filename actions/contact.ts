"use server";

import { formContactSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";

export const createContact = async (
  values: z.infer<typeof formContactSchema>
) => {
  const validatedFields = formContactSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { name, phone, email, title, address, description } =
    validatedFields.data;
  await db.contact.create({
    data: {
      name,
      email,
      phone,
      address,
      title,
      description,
    },
  });
  return { success: "Create Contact success" };
};
