"use server";

import prismadb from "@/lib/prismadb";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";

export default async function onSubmit({
  name,
  userId,
}: {
  name: string;
  userId: number;
}) {
  //@ts-ignore
  const res: POUWithSpecialization | null = await prismadb.pOU.create({
    data: { name, userId },
    include: {
      WebResource: true,
      Enterprise: { include: { Region: true } },
      FarmSpecialization: {
        include: {
          AmountSpecialization: true,
          Specialization: true,
        },
      },
    },
  });
  return res;
}
