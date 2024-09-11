"use server";

import { formZaLoSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";
import { getConnectZaLoById } from "@/data/user";

export const createConnectZaLo = async (
  values: z.infer<typeof formZaLoSchema>
) => {
  const validatedFields = formZaLoSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { name, phone } = validatedFields.data;
  await db.connectZaLo.create({
    data: {
      name,
      phone,
      created_at: new Date(),
    },
  });
  return { success: "Create Zalo success" };
};
export const fetchConnectZaLo = async () => {
  try {
    const connectZaLo = await db.connectZaLo.findMany();
    return connectZaLo;
  } catch (error) {
    return "failed to fetch zalo sđt";
  }
};
export const updateStateConnectZaLo = async (
  id: string,
  newState: StateConnectZaLo
) => {
  const getConnectZaLo = await getConnectZaLoById(id);
  try {
    if (getConnectZaLo) {
      const users = await db.connectZaLo.update({
        where: { id: getConnectZaLo.id },
        data: { state: newState },
      });
      return users;
    } else {
      return "ZaLo not found";
    }
  } catch (error) {
    return "failed to update ZaLo";
  }
};
