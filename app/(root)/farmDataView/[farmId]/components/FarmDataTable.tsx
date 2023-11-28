"use client";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import { useUserData } from "@/hooks/use_userData";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import {
  List,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import { User as PrismaUser } from "@prisma/client";
import { User } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

function FarmDataTable({
  farm,
  prismaUserData,
  userData,
}: {
  farm: POUWithSpecialization;
  prismaUserData: PrismaUser | null;
  userData: User | null;
}) {
  const { prismaUser, setPrismaUser } = usePrismaUserData();
  const { user, setUser } = useUserData();
  const [prismaUserState, setPrismaUserState] = useState(prismaUserData);
  const [userState, setUserState] = useState(userData);
  useEffect(() => {
    if (!prismaUserData) setPrismaUser(prismaUserData);
  }, []);
  useEffect(() => {
    if (prismaUser) setPrismaUserState(prismaUser);
  }, [JSON.stringify(prismaUser)]);
  useEffect(() => {
    if (userData) setUser(userData);
  }, []);
  useEffect(() => {
    if (user) setUserState(user);
  }, [JSON.stringify(user)]);
  return (
    <></>
    // <TableContainer maxW={"800px"} mx={"auto"}>
    //   <Table>
    //     <Tbody>
    //       <Tr>
    //         <Td fontWeight={"bold"}>Повна назва</Td>
    //         <Td>{farm.name}</Td>
    //       </Tr>
    //       <Tr>
    //         <Td fontWeight={"bold"}>Код</Td>
    //         <Td>{farm.Enterprise?.code}</Td>
    //       </Tr>
    //       <Tr>
    //         <Td fontWeight={"bold"}>Область</Td>
    //         <Td>{farm.Enterprise?.Region.name}</Td>
    //       </Tr>
    //       <Tr>
    //         <Td fontWeight={"bold"}>Район</Td>
    //         <Td>{farm.Enterprise?.district}</Td>
    //       </Tr>
    //       <Tr>
    //         <Td fontWeight={"bold"}>Населений пункт</Td>
    //         <Td>{farm.Enterprise?.village}</Td>
    //       </Tr>
    //       <Tr>
    //         <Td fontWeight={"bold"}>Сторінки в Інтернеті</Td>
    //         <Td>
    //           {farm.WebResource.filter(
    //             (el) => el.type == "Сторінка в інтернеті"
    //           ).map((el) => (
    //             <React.Fragment key={el.id}>
    //               {el.name}
    //               <br />
    //               {el.link}
    //             </React.Fragment>
    //           ))}
    //         </Td>
    //       </Tr>
    //       <Tr>
    //         <Td fontWeight={"bold"}>Сторінки в соціальних мережах</Td>
    //         <Td>
    //           {farm.WebResource.filter(
    //             (el) => el.type == "Сторінка в соц. мережі"
    //           ).map((el) => (
    //             <React.Fragment key={el.id}>
    //               {el.name}
    //               <br />
    //               {el.link}
    //             </React.Fragment>
    //           ))}
    //         </Td>
    //       </Tr>
    //       <Tr>
    //         <Td fontWeight={"bold"}>Контактні дані:</Td>
    //         <Td></Td>
    //       </Tr>
    //       <Tr>
    //         <Td>
    //           <UnorderedList>
    //             <ListItem>П. І. Б.</ListItem>
    //             <ListItem>Посада контактної особи</ListItem>
    //             <ListItem>Робочий телефон</ListItem>
    //             <ListItem>Мобільний телефон </ListItem>
    //             <ListItem>Email</ListItem>
    //           </UnorderedList>
    //         </Td>
    //         <Td>
    //           <List>
    //             <ListItem>
    //               {prismaUserState ? (
    //                 prismaUserState.firstName +
    //                 " " +
    //                 prismaUserState.secondName ? (
    //                   prismaUserState.firstName +
    //                   " " +
    //                   prismaUserState.secondName
    //                 ) : (
    //                   <br />
    //                 )
    //               ) : null}
    //             </ListItem>
    //             <ListItem>
    //               {prismaUserState ? (
    //                 prismaUserState.position ? (
    //                   prismaUserState.position
    //                 ) : (
    //                   <br />
    //                 )
    //               ) : null}
    //             </ListItem>
    //             <ListItem>
    //               {prismaUserState ? (
    //                 prismaUserState.workPhone ? (
    //                   prismaUserState.workPhone
    //                 ) : (
    //                   <br />
    //                 )
    //               ) : null}
    //             </ListItem>
    //             <ListItem>
    //               {prismaUserState ? (
    //                 prismaUserState.phone ? (
    //                   prismaUserState.phone
    //                 ) : (
    //                   <br />
    //                 )
    //               ) : null}
    //             </ListItem>
    //             <ListItem>{userState?.email}</ListItem>
    //           </List>
    //         </Td>
    //       </Tr>
    //     </Tbody>
    //   </Table>
    // </TableContainer>
  );
}

export default FarmDataTable;
