"use server";

import prismadb from "@/lib/prismadb";
import { Activities } from "./DemonstrationActivitiesDialog";

export default async function onSubmit(
  data: Activities,
  update: boolean,
  userId: number
) {
  if (!update) {
    const res = await prismadb.demonstrationActivity.create({
      data: {
        ...data,
        date: new Date(data.date),
        userId,
      },
      include: {
        user: true,
      },
    });
    return res;
  } else {
  }
}
