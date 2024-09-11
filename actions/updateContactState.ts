"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { getContactById, getPartnerById } from "@/data/user";

export const updateStateContact = async (
  id: string,
  newState: StateContact
) => {
  const getContact = await getContactById(id);
  try {
    if (getContact) {
      const users = await db.contact.update({
        where: { id: getContact.id },
        data: { state: newState },
      });
      return users;
    } else {
      return "Contact not found";
    }
  } catch (error) {
    return "failed to update Contact";
  }
};
