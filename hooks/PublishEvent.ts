"use server";

import prismadb from "@/lib/prismadb";
import { EventWithUser } from "@/types/DemonstrationActivitiesTypes";

export default async function PublishEvent(
  id: number,
  isPublic: boolean
): Promise<EventWithUser> {
  const res = await prismadb.demonstrationActivity.update({
    where: { id },
    data: {
      isPublic,
    },
    include: { user: true },
  });

  return res;
}
