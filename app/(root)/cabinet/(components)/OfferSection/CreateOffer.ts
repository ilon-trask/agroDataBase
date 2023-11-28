"use server";

import prismadb from "@/lib/prismadb";
import { OfferCreateType } from "./OfferDialog";
import { User } from "@prisma/client";
import { OfferWithUserAndPOU } from "@/types/OfferTypes";

export default async function CreateOffer(data: OfferCreateType, user: User) {
  // const res: OfferWithUserAndPOU = await prismadb.offer.create({
  //   data: {
  //     ...data,
  //     userId: user.id,
  //     pOUId: data.pOUId ? +data.pOUId : undefined,
  //   },
  //   include: {
  //     user: true,
  //     POU: true,
  //   },
  // });
  // return res;
}
