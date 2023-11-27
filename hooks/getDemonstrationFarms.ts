"use server";

import prismadb from "@/lib/prismadb";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";

export async function getDemonstrationFarms() {
  //@ts-ignore
  const farms: POUWithSpecialization[] = await prismadb.pOU.findMany({});
  return farms;
}

export async function getDemonstrationFarm(farmId: number) {
  //@ts-ignore
  const farm: POUWithSpecialization | null = await prismadb.pOU.findFirst({
    where: { id: farmId },
  });
  return farm;
}
