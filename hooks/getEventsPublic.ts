import prismadb from "@/lib/prismadb";
import { EventWithUser } from "@/types/DemonstrationActivitiesTypes";

export default async function getEventsPublic(): Promise<EventWithUser[] | []> {
  const events = await prismadb.event.findMany({
    include: { user: true },
    where: {
      isPublic: true,
    },
    orderBy: { id: "asc" },
  });
  // const collator = new Intl.Collator(undefined, { sensitivity: "base" });
  return events;
}
