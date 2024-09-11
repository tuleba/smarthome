"use server";

import { formPartnerSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";

export const createPartner = async (
  values: z.infer<typeof formPartnerSchema>
) => {
  const validatedFields = formPartnerSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { name, phone, email, address, note } = validatedFields.data;
  await db.partner.create({
    data: {
      name,
      email,
      phone,
      address,
      note,
    },
  });
  return { success: "Create Partner success" };
};
