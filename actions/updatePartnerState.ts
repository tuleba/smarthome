"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { getPartnerById } from "@/data/user";

export const updateStatePartner = async (
  id: string,
  newState: StatePartner
) => {
  const getPartner = await getPartnerById(id);
  try {
    if (getPartner) {
      const users = await db.partner.update({
        where: { id: getPartner.id },
        data: { state: newState },
      });
      return users;
    } else {
      return "Partner not found";
    }
  } catch (error) {
    return "failed to update Partner";
  }
};
