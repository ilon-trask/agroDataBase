"use server";

import prismadb from "@/lib/prismadb";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";

export async function getDemonstrationFarms() {
  //@ts-ignore
  const farms: POUWithSpecialization[] = await prismadb.pOU.findMany({
    include: {
      WebResource: true,
      Enterprise: { include: { Region: true } },
      FarmSpecialization: {
        include: { AmountSpecialization: true, Specialization: true },
      },
    },
  });
  return farms;
}

export async function getDemonstrationFarm(farmId: number) {
  //@ts-ignore
  const farm: POUWithSpecialization | null = await prismadb.pOU.findFirst({
    where: { id: farmId },
    include: {
      WebResource: true,
      Enterprise: { include: { Region: true } },
      FarmSpecialization: {
        include: { AmountSpecialization: true, Specialization: true },
      },
    },
  });
  return farm;
}
