"use client";
import UserDataModal from "@/components/modals/UserDataModal/UserDataModal";
import MyButton from "@/components/ui/MyButton";
import { useUserDataModal } from "@/hooks/use-userData-modal";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
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
    <>
      <TableContainer maxW={"600px"} mx={"auto"}>
        <Table size="sm">
          <Tbody>
            <Tr>
              <Td>Ім'я прізвище</Td>
              <Td>
                {prismaUserState.firstName + " " + prismaUserState.secondName}
              </Td>
            </Tr>
            <Tr>
              <Td>Посада</Td>
              <Td>{prismaUserState.position}</Td>
            </Tr>
            <Tr>
              <Td>Пошта</Td>
              <Td>{user.email}</Td>
            </Tr>
            <Tr>
              <Td>Робочий телефон</Td>
              <Td>{prismaUserState.workPhone}</Td>
            </Tr>
            <Tr>
              <Td>Контактний телефон</Td>
              <Td>{prismaUserState.phone}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <MyButton onClick={() => onOpen()}>Редагувати персональні данні</MyButton>
      <UserDataModal isUpdate userData={prismaUserState} />
    </>
  );
}
