import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import React from "react";
import CheckPrismaUser from "./CheckPrismaUser";
import DemonstrationActivitiesSection from "./(components)/DemonstrationActivitiesSection/DemonstrationActivitiesSection";
import prismadb from "@/lib/prismadb";
import createServerClient from "@/lib/createServerClient";
import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import DemonstrationFarmsSection from "./(components)/DemonstrationFarmsSection/DemonstrationFarmsSection";
import UserDataSection from "./(components)/UserDataSection/UserDataSection";
import { getDemonstrationFarms } from "@/hooks/getDemonstrationFarms";
import ProjectSection from "./(components)/ProjectSection/ProjectSection";
import { ProjectWithUser } from "../../../types/ProjectTypes";
import OfferSection from "./(components)/OfferSection/OfferSection";
import { OfferWithUserAndPOU } from "@/types/OfferTypes";

export default async function Page() {
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("немає аккаунту");
  const prismaUser = await prismadb.user.findFirst({
    where: { sub: user.id },
  });
  if (!prismaUser) throw new Error("немає прізма юзера");
  const activities: DemonstrationActivityWithUser[] | [] =
    await prismadb.demonstrationActivity.findMany({
      include: { user: true },
      where: { user: { sub: user.id } },
      orderBy: { id: "asc" },
    });
  const farms: POUWithSpecialization[] = await getDemonstrationFarms();
  const projects: ProjectWithUser[] = await prismadb.project.findMany({
    include: { user: true },
    where: { user: { sub: user.id } },
    orderBy: { id: "asc" },
  });
  const offers: OfferWithUserAndPOU[] = await prismadb.offer.findMany({
    include: { user: true, POU: true },
    where: { user: { sub: user.id } },
    orderBy: { id: "asc" },
  });
  return (
    <MyContainer>
      <CheckPrismaUser />
      <MyHeading>Персональний кабінет</MyHeading>
      <UserDataSection user={user} prismaUser={prismaUser} />
      <MyHeading>Мої проекти</MyHeading>
      <ProjectSection projects={projects} />
      <MyHeading>Мої заходи</MyHeading>
      <DemonstrationActivitiesSection activities={activities} />
      <MyHeading>Мої підприємства, організації, установи</MyHeading>
      <DemonstrationFarmsSection farms={farms} />
      <MyHeading>Мої пропозиції партнерства</MyHeading>
      <OfferSection offers={offers} />
    </MyContainer>
  );
}
