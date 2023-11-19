"use server";

import prismadb from "@/lib/prismadb";
import { OfferWithUserAndPOU } from "@/types/OfferTypes";

export default async function getOffersPublic(): Promise<
  OfferWithUserAndPOU[]
> {
  const res: OfferWithUserAndPOU[] = await prismadb.offer.findMany({
    where: { isPublic: true },
    include: { POU: true, user: true },
    orderBy: { id: "asc" },
  });
  return res;
}
