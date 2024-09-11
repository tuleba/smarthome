"use server";
import * as z from "zod";
import { db } from "@/lib/db";

export const fetchUser = async () => {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    return "failed to fetch user";
  }
};
