"use client";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import React from "react";

export default function CheckPrismaUser() {
  const { prismaUser } = usePrismaUserData();
  console.log(prismaUser);
  if (prismaUser == null) throw new Error("Немає прізма юзера");
  return <></>;
}
