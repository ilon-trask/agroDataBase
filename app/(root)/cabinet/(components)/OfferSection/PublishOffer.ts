"use server";

import prismadb from "@/lib/prismadb";
import { OfferWithUserAndPOU } from "@/types/OfferTypes";

export default async function PublishOffer(offerId: number, isPublic: boolean) {
  const res: OfferWithUserAndPOU = await prismadb.offer.update({
    where: {
      id: offerId,
    },
    data: {
      isPublic,
    },
    include: {
      user: true,
      POU: true,
    },
  });
  return res;
}
