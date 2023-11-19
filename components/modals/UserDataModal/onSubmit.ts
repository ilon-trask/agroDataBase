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
        firstName: data.firstName,
        secondName: data.secondName,
        sub: userSub,
        phone: data.phone,
        workPhone: data.workPhone,
        position: data.position,
      },
    });
    return res;
  } else if (isUpdate) {
    const res = await prismadb.user.update({
      data: { ...data },
      where: { id: data.id! },
    });
    return res;
  }
  console.log("server");
}
