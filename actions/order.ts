"use server";

import { OrderSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";

export const createOrder = async (values: z.infer<typeof OrderSchema>) => {
  const validatedFields = OrderSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const {
    name,
    phone,
    email,
    address,
    items_id,
    items_name,
    items_price,
    items_quantity,
  } = validatedFields.data;
  await db.order.create({
    data: {
      name,
      phone,
      email,
      address,
      items_id,
      items_name,
      items_price,
      items_quantity,
    },
  });
  return { success: "Create Order success" };
};
