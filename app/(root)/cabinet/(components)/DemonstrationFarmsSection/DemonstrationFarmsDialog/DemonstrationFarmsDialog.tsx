"use client";
import Dialog from "@/components/ui/Dialog";
import MyButton from "@/components/ui/MyButton";
import {
  Checkbox,
  FormLabel,
  Input,
  Table,
  Td,
  Tr,
  ModalHeader,
  ModalBody,
  Th,
  Thead,
  ModalFooter,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { AddIcon } from "@chakra-ui/icons";
import onSubmit from "./onSubmit";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import { useFarmsData } from "@/hooks/use_farmsData";
export default function DemonstrationFarmsDialog({
  isOpen,
  setIsOpen,
  isUpdate,
  setIsUpdate,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isUpdate: boolean;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
}) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: "" },
  });
  const { prismaUser } = usePrismaUserData();
  const { setNewFarms } = useFarmsData();
  if (prismaUser == null) throw new Error("Немає прізма юзера");

  const mockData = [
    { name: "перше", area: 0, amount: 0 },
    { name: "друге", area: 0, amount: 0 },
    { name: "третє", area: 0, amount: 0 },
    { name: "четверте", area: 0, amount: 0 },
  ];
  const ClientSubmit = async (data: { name: string }) => {
    if (!prismaUser) throw new Error("Немає прізма юзера");
    const res = await onSubmit({ name: data.name, userId: prismaUser.id });
    //@ts-ignore
    setNewFarms(res);
    reset();
    setIsOpen(false);
  };
  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        reset();
      }}
    >
      <ModalHeader>Створення демонстраційної ферми</ModalHeader>
      <form onSubmit={handleSubmit(ClientSubmit)}>
        <ModalBody>
          <FormLabel>
            Назва
            <Input {...register("name", { required: true })} />
          </FormLabel>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Спеціалізація</Th>
                <Th>обсяг</Th>
                <Th>Сума</Th>
              </Tr>
            </Thead>
            {/* {mockData.map((el) => (
              <Tr key={el.name}>
                <Td>
                  <Checkbox></Checkbox>
                </Td>
                <Td>{el.name}</Td>
                <Td>{el.area}</Td>
                <Td>{el.amount}</Td>
              </Tr>
            ))} */}
            <Tr>
              <Td></Td>
              <Td>
                <Input size={"sm"}></Input>
              </Td>
              <Td>
                <Input size={"sm"}></Input>
              </Td>
              <Td>
                <Input size={"sm"}></Input>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <AddIcon />
              </Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Table>
        </ModalBody>
        <ModalFooter>
          <MyButton type="submit">Збегерти</MyButton>
        </ModalFooter>
      </form>
    </Dialog>
  );
}
