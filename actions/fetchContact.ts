"use server";
import * as z from "zod";
import { db } from "@/lib/db";

export const fetchContact = async () => {
  try {
    const contacts = await db.contact.findMany();
    return contacts;
  } catch (error) {
    return "failed to fetch user";
  }
};
