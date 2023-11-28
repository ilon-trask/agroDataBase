"use server";
import { getDemonstrationFarm } from "@/hooks/getDemonstrationFarms";
import prismadb from "@/lib/prismadb";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";

export default async function onSubmit(
  data: {
    id?: number;
    code: number;
    regionId: number;
    district: string;
    village: string;
  },
  userId: number,
  farmId: number
) {
  // const enterprise = await prismadb.enterprise.findFirst({
  //   where: { id: data.id! },
  // });
  // if (enterprise) {
  //   await prismadb.enterprise.update({
  //     data: {
  //       ...data,
  //       creatorId: userId,
  //       demonstrationFarmId: farmId,
  //     },
  //     where: { id: data.id },
  //   });
  //   const res: POUWithSpecialization | null = await getDemonstrationFarm(
  //     farmId
  //   );
  //   return res;
  // } else {
  //   await prismadb.enterprise.create({
  //     data: {
  //       ...data,
  //       creatorId: userId,
  //       demonstrationFarmId: farmId,
  //     },
  //   });
  //   const res: POUWithSpecialization | null = await getDemonstrationFarm(
  //     farmId
  //   );
  //   return res;
  // }
}
