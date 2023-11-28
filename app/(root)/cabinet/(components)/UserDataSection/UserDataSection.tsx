"use client";
import UserDataModal from "@/components/modals/UserDataModal/UserDataModal";
import MyButton from "@/components/ui/MyButton";
import MyHeading from "@/components/ui/MyHeading";
import MyText from "@/components/ui/MyText";
import { useUserDataModal } from "@/hooks/use-userData-modal";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import { Flex, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
import { User as PrismaUser } from "@prisma/client";
import { User } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

export default function UserDataSection({
  prismaUser,
  user,
}: {
  prismaUser: PrismaUser;
  user: User;
}) {
  const [prismaUserState, setPrismaUserState] = useState(prismaUser);
  const { prismaUser: prismaUserData, setPrismaUser } = usePrismaUserData();
  useEffect(() => {
    if (prismaUserData) setPrismaUserState(prismaUserData);
  }, [prismaUserData]);
  const { onOpen } = useUserDataModal();
  return (
    <Flex justifyContent={"space-between"}>
      <MyHeading>
        Учасник: {prismaUserState.secondName + " " + prismaUserState.firstName}
      </MyHeading>
      <MyHeading>{prismaUserState.phone}</MyHeading>
      <MyHeading></MyHeading>
      <MyButton onClick={() => onOpen()}>Редагувати персональні данні</MyButton>
      <UserDataModal isUpdate userData={prismaUserState} />
    </Flex>
  );
}
