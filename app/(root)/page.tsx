import prismadb from "@/lib/prismadb";
import { EventWithUser } from "@/types/DemonstrationActivitiesTypes";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import { getDemonstrationFarms } from "@/hooks/getDemonstrationFarms";
import createServerClient from "@/lib/createServerClient";
import NonAuthMainPage from "./(components)/NonAuthMainPage";
import getProjectPublic from "@/hooks/getProjectsPublic";
import { OfferWithUserAndPOU } from "@/types/OfferTypes";
import getOffersPublic from "@/hooks/getOffersPublic";
import MainPage from "./(components)/MainPage";

export default async function Home() {
  const events: EventWithUser[] | null = await prismadb.event.findMany({
    include: { user: true },
  });
  // const farms: POUWithSpecialization[] = await getDemonstrationFarms();
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const projects = await getProjectPublic();
  const offers: OfferWithUserAndPOU[] = await getOffersPublic();
  return (
    <>
      {user ? (
        <MainPage events={events} projects={projects} offers={offers} />
      ) : (
        <NonAuthMainPage events={events} projects={projects} offers={offers} />
      )}
    </>
  );
}
