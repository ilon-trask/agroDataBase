import MyContainer from "@/components/ui/MyContainer";
import React from "react";
import prismadb from "@/lib/prismadb";
import getRegions from "@/hooks/getRegions";
import createServerClient from "@/lib/createServerClient";
import { getDemonstrationFarm } from "@/hooks/getDemonstrationFarms";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import Quiz from "./components/Quiz/Quiz";

export default async function page({ params }: { params: { farmId: string } }) {
  const farm: POUWithSpecialization | null = await getDemonstrationFarm(
    +params.farmId
  );
  if (!farm) throw new Error("не має ферми з таким id");

  // const regions = await getRegions();
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const prismaUserData = await prismadb.user.findFirst({
    where: { sub: user?.id! },
  });

  return (
    <MyContainer>
      <Quiz
        // regions={regions}
        farm={farm}
        prismaUser={prismaUserData}
        user={user}
      />
    </MyContainer>
  );
}
