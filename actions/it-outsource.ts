"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import { formOutsourceSchema } from "@/schemas";

export const createItOutsource = async (
  values: z.infer<typeof formOutsourceSchema>
) => {
  const validatedFields = formOutsourceSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { name, phone, address, type, time } = validatedFields.data;
  await db.itOutsource.create({
    data: {
      name,
      phone,
      address,
      type,
      time,
    },
  });
  return { success: "Create It Outsource success" };
};
