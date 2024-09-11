"use server";

import { ProductSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";

export const addProduct = async (values: z.infer<typeof ProductSchema>) => {
  const validatedFields = ProductSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { name, category, price } = validatedFields.data;
  await db.product.create({
    data: {
      name,
      category,
      price,
    },
  });
  return { success: "Product added!" };
};
