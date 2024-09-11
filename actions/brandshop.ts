"use server";

import { formBrandShopSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";

export const createBrandShop = async (
  values: z.infer<typeof formBrandShopSchema>
) => {
  const validatedFields = formBrandShopSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { name, phone, email, address, note } = validatedFields.data;
  await db.brandShop.create({
    data: {
      name,
      email,
      phone,
      address,
      note,
    },
  });
  return { success: "Create BrandShop success" };
};
