"use server";
import * as z from "zod";
import { db } from "@/lib/db";

export const fetchPartner = async () => {
  try {
    const partners = await db.partner.findMany();
    return partners;
  } catch (error) {
    return "failed to fetch user";
  }
};
