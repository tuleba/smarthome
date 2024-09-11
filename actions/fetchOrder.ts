"use server";
import * as z from "zod";
import { db } from "@/lib/db";

export const fetchOrder = async () => {
  try {
    const orders = await db.order.findMany();
    return orders;
  } catch (error) {
    return "failed to fetch user";
  }
};
