import prismadb from "@/lib/prismadb";
import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";

export default async function getEventsPublic(): Promise<
  DemonstrationActivityWithUser[] | []
> {
  const events = await prismadb.demonstrationActivity.findMany({
    include: { user: true },
    where: {
      isPublic: true,
    },
    orderBy: { id: "asc" },
  });
  // const collator = new Intl.Collator(undefined, { sensitivity: "base" });
  return events;
}
