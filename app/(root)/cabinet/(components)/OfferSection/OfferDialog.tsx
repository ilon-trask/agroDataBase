"use client";
import Dialog from "@/components/ui/Dialog";
import MyButton from "@/components/ui/MyButton";
import MySelect from "@/components/ui/MySelect";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import {
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import CreateOffer from "./CreateOffer";
import { OfferWithUserAndPOU } from "@/types/OfferTypes";
const offerCategory = ["Товари", "Роботи", "Послуги"];
const offerType = ["Купівля", "Продаж"];
export interface OfferCreateType {
  description: string;
  category: "Товари" | "Роботи" | "Послуги" | "";
  type: "Купівля" | "Продаж" | "";
  pOUId: string;
}
export default function OfferDialog({
  setOffersData,
}: {
  setOffersData: Dispatch<SetStateAction<OfferWithUserAndPOU[]>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { prismaUser } = usePrismaUserData();
  if (prismaUser == null) throw new Error("Немає прізма юзера");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<OfferCreateType>({
    defaultValues: {
      description: "",
      category: "",
      type: "",
      pOUId: "",
    },
  });
  const onSubmit = async (data: OfferCreateType) => {
    const res = await CreateOffer(data, prismaUser);
    setOffersData((prev) => [...prev, res]);
    setIsOpen(false);
  };
  return (
    <>
      <MyButton onClick={() => setIsOpen(true)}>Додати пропозицію</MyButton>
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          reset();
        }}
      >
        <ModalHeader>Створення пропозиції</ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormLabel>
              Опис пропозиції
              <Input {...register("description", { required: true })} />
            </FormLabel>
            <FormLabel>
              Виберіть ПОУ
              <Select {...register("pOUId", { required: true })}>
                <option value="" hidden defaultChecked>
                  ПОУ
                </option>
                <option value="Особиста пропозиція">Особиста пропозиція</option>
              </Select>
            </FormLabel>
            <FormLabel>
              Вид
              <Select {...register("type", { required: true })}>
                <option value="" hidden defaultChecked>
                  Вид
                </option>
                {offerType.map((el) => (
                  <option value={el} key={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </FormLabel>
            <FormLabel>
              Категорія
              <Select {...register("category", { required: true })}>
                <option value="" hidden defaultChecked>
                  Категорія
                </option>
                {offerCategory.map((el) => (
                  <option value={el} key={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </FormLabel>
          </ModalBody>
          <ModalFooter>
            <MyButton type="submit">Збегерти</MyButton>
          </ModalFooter>
        </form>
      </Dialog>
    </>
  );
}
