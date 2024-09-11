"use server";
import * as z from "zod";
import { db } from "@/lib/db";

export const fetchBrandShop = async () => {
  try {
    const brandShops = await db.brandShop.findMany();
    return brandShops;
  } catch (error) {
    return "failed to fetch user";
  }
};
