"use server";

import prismadb from "@/lib/prismadb";
import { Activities } from "./EventsDialog";
import { EventWithUser } from "@/types/DemonstrationActivitiesTypes";

export default async function onSubmit(
  data: Activities,
  update: boolean,
  userId: number
): Promise<EventWithUser | undefined | null> {
  if (!update) {
    const res = await prismadb.event.create({
      data: {
        ...data,
        date: new Date(data.date),
        userId,
      },
      include: { user: true },
    });

    return res;
  } else {
  }
}
