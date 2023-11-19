"use client";
import Dialog from "@/components/ui/Dialog";
import { useUserData } from "@/hooks/use_userData";
import {
  Button,
  FormLabel,
  Input,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Select,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import onSubmit from "./onSubmit";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import { useActivitiesData } from "@/hooks/use_activitiesData";
import getDistricts from "@/hooks/getDistricts";
import getEventTypes from "@/hooks/getEventTypes";
import getEventsDirections from "@/hooks/getEventsDirections";
import getEventsSpecialization from "@/hooks/getEventsSpecialization";
export type Activities = {
  date: string;
  name: string;
  district: string;
  type: string;
  direction: string;
  specialization: string;
};
type props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isUpdate: boolean;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
};
export default function DemonstrationActivitiesDialog({
  isOpen,
  isUpdate,
  setIsOpen,
  setIsUpdate,
}: props) {
  const { user } = useUserData();
  const { setNewActivities } = useActivitiesData();
  const { prismaUser } = usePrismaUserData();
  if (prismaUser == null) throw new Error("Немає прізма юзера");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Activities>({
    defaultValues: {
      date: "",
      name: "",
      direction: "",
      district: "",
      specialization: "",
      type: "",
    },
  });
  const ClientSubmit = async (data: Activities) => {
    if (!prismaUser) throw new Error("Немає прізма юзера");
    const res = await onSubmit(data, isUpdate, prismaUser.id);
    if (res) setNewActivities(res);
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
      <ModalHeader>Стоврення демонстраційного заходу</ModalHeader>
      <form onSubmit={handleSubmit(ClientSubmit)}>
        <ModalBody>
          <FormLabel m={0}>
            Назва
            <Input {...register("name", { required: true })} />
          </FormLabel>
          <FormLabel m={0}>
            Дата
            <Input {...register("date", { required: true })} type="date" />
          </FormLabel>
          <FormLabel m={0}>
            Тематика
            <Select {...register("direction", { required: true })}>
              <option value={""} hidden defaultChecked>
                Тематика
              </option>
              {getEventsDirections().map((el) => (
                <option value={el} key={el}>
                  {el}
                </option>
              ))}
            </Select>
          </FormLabel>
          <FormLabel m={0}>
            Область
            <Select {...register("district", { required: true })}>
              <option value={""} hidden defaultChecked>
                Область
              </option>
              {getDistricts().map((el) => (
                <option value={el}>{el}</option>
              ))}
            </Select>
          </FormLabel>
          <FormLabel m={0}>
            Спеціалізація
            <Select {...register("specialization", { required: true })}>
              <option value={""} hidden defaultChecked>
                Спеціалізація
              </option>
              {getEventsDirections().map((el) => (
                <option value={el}>{el}</option>
              ))}
            </Select>
          </FormLabel>
          <FormLabel m={0}>
            Вид
            <Select {...register("type", { required: true })}>
              <option value={""} hidden defaultChecked>
                Вид
              </option>
              {getEventTypes().map((el) => (
                <option value={el}>{el}</option>
              ))}
            </Select>
          </FormLabel>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">Збегерти</Button>
        </ModalFooter>
      </form>
    </Dialog>
  );
}
