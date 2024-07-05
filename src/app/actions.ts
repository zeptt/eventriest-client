"use server";

import api from "@/lib/api";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deleteEvent(eventId: number) {
  const cookie = cookies().get("sid");
  
  const res = await api.delete(`/event/${eventId}`, {
    headers: {
      cookie: `${cookie?.name}=${cookie?.value}`,
    },
  });


  revalidatePath("/dashboard");
}
