"use server";
import * as z from "zod";
import { db } from "@/lib/db";

export const fetchItOutsource = async () => {
  try {
    const itOutsource = await db.itOutsource.findMany();
    return itOutsource;
  } catch (error) {
    return "failed to fetch user";
  }
};
