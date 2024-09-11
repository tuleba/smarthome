"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { getOrderById } from "@/data/product";

export const updateStateOrder = async (id: string, newState: StateOrder) => {
  const getOrder = await getOrderById(id);
  try {
    if (getOrder) {
      const users = await db.order.update({
        where: { id: getOrder.id },
        data: { state: newState },
      });
      return users;
    } else {
      return "Order not found";
    }
  } catch (error) {
    return "failed to update order";
  }
};
