"use server";

import prismadb from "@/lib/prismadb";
import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";

export default async function PublishEvent(
  id: number,
  isPublic: boolean
): Promise<DemonstrationActivityWithUser> {
  const res = await prismadb.demonstrationActivity.update({
    where: { id },
    data: {
      isPublic,
    },
    include: { user: true },
  });

  return res;
}
