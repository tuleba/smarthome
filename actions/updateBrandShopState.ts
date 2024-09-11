"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { getBrandShopById } from "@/data/user";

export const updateStateBrandShop = async (
  id: string,
  newState: StateBrandShop
) => {
  const getBrandShop = await getBrandShopById(id);
  try {
    if (getBrandShop) {
      const users = await db.brandShop.update({
        where: { id: getBrandShop.id },
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
