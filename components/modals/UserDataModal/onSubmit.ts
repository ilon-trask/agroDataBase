"use server";

import prismadb from "@/lib/prismadb";
import { PrismaUserData } from "./UserDataModal";

export default async function onSubmit(
  data: PrismaUserData,
  userSub: string,
  isUpdate?: boolean
) {
  if (!isUpdate) {
    const res = await prismadb.user.create({
      data: {
        sub: userSub,
        ...data,
      },
    });
    return res;
  } else if (isUpdate) {
    const res = await prismadb.user.update({
      data,
      where: { id: data.id! },
    });
    return res;
  }
}
