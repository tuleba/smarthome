"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { getItOutsourceById } from "@/data/user";

export const updateStateItOutsource = async (
  id: string,
  newState: StateItOutsource
) => {
  const getItOutsource = await getItOutsourceById(id);
  try {
    if (getItOutsource) {
      const users = await db.itOutsource.update({
        where: { id: getItOutsource.id },
        data: { state: newState },
      });
      return users;
    } else {
      return "BrandShop not found";
    }
  } catch (error) {
    return "failed to update BrandShop";
  }
};
