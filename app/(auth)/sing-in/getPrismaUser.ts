"use server";

import prismadb from "@/lib/prismadb";

export default async function getPrismaUser(userSub: string) {
  const res = await prismadb.user.findFirst({
    where: {
      sub: userSub,
    },
  });
  return res;
}
