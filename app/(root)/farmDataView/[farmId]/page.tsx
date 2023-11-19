import MyButton from "@/components/ui/MyButton";
import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import { getDemonstrationFarm } from "@/hooks/getDemonstrationFarms";
import getRegions from "@/hooks/getRegions";
import createServerClient from "@/lib/createServerClient";
import prismadb from "@/lib/prismadb";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import React from "react";
import FarmDataSection from "./components/FarmDataSection/FarmDataSection";

export default async function Home({ params }: { params: { farmId: string } }) {
  const farm: POUWithSpecialization | null = await getDemonstrationFarm(
    +params.farmId
  );
  if (!farm) throw new Error("не має ферми з таким id");

  const regions = await getRegions();
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const prismaUserData = await prismadb.user.findFirst({
    where: { sub: user?.id! },
  });
  return (
    <MyContainer>
      <MyHeading>
        Загальна інформація про підприємство, організацію, установу
      </MyHeading>
      <FarmDataSection
        farm={farm}
        regions={regions}
        farmId={params.farmId}
        prismaUserData={prismaUserData}
        user={user}
      />
    </MyContainer>
  );
}
