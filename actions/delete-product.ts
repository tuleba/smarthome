"use server";

import { ProductSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";

export const deleteProduct = async (id: string) => {
  await db.product.delete({
    where: {
      id,
    },
  });
  return { success: "Product added!" };
};
