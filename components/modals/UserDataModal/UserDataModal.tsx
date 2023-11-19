"use client";
import { useUserDataModal } from "@/hooks/use-userData-modal";
import React from "react";
import Dialog from "../../ui/Dialog";
import { useForm } from "react-hook-form";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormLabel,
  Input,
  Flex,
  Grid,
} from "@chakra-ui/react";
import onSubmit from "./onSubmit";
import MyButton from "@/components/ui/MyButton";
import { useUserData } from "@/hooks/use_userData";
import ErrorText from "@/components/ui/ErrorText";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import { useRouter } from "next/navigation";
import Div from "@/components/ui/Div";
import MyText from "@/components/ui/MyText";

export type PrismaUserData = {
  id?: number;
  firstName: string;
  secondName: string;
  workPhone: string | null;
  phone: string | null;
  position: string | null;
};

export default function UserDataModal({
  userData,
  isUpdate,
}: {
  isUpdate?: boolean;
  userData?: PrismaUserData;
}) {
  const { isOpen, onClose } = useUserDataModal();
  const { user } = useUserData();
  const { setPrismaUser } = usePrismaUserData();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PrismaUserData>({
    values: userData,
    defaultValues: {
      firstName: "",
      secondName: "",
      workPhone: null,
      phone: null,
      position: null,
    },
  });
  const router = useRouter();
  const clientSubmit = async (res: PrismaUserData) => {
    if (!user) throw new Error("Немає аккаунту");
    const data = await onSubmit(
      { ...res, id: userData?.id },
      user.id,
      isUpdate
    );
    setPrismaUser(data);
    router.push("/cabinet");
    onClose();
    reset();
  };
  return (
    <Dialog isOpen={isOpen} onClose={onClose} onOverlayClick={onClose}>
      <ModalHeader>Введіть персональні дані</ModalHeader>
      <form onSubmit={handleSubmit(clientSubmit)}>
        <ModalBody>
          <Div>
            <Grid alignItems={"center"} templateColumns={"1fr 1fr"}>
              <MyText>Ім'я*</MyText>
              <Input {...register("firstName", { required: true })} />
            </Grid>
            {errors["firstName"] ? (
              <ErrorText>{errors["firstName"].message}</ErrorText>
            ) : null}
          </Div>
          <Div>
            <Grid alignItems={"center"} templateColumns={"1fr 1fr"}>
              <MyText>Прізвище*</MyText>
              <Input {...register("secondName", { required: true })} />
            </Grid>
            {errors["secondName"] ? (
              <ErrorText>{errors["secondName"].message}</ErrorText>
            ) : null}
          </Div>
          <Div>
            <Grid alignItems={"center"} templateColumns={"1fr 1fr"}>
              <MyText>Робочий телефон</MyText>
              <Input
                {...register("workPhone")}
                type="number"
                inputMode="numeric"
              />
            </Grid>
            {errors["workPhone"] ? (
              <ErrorText>{errors["workPhone"].message}</ErrorText>
            ) : null}
          </Div>
          <Div>
            <Grid alignItems={"center"} templateColumns={"1fr 1fr"}>
              <MyText>Контактний телефон</MyText>
              <Input {...register("phone")} type="number" inputMode="numeric" />
            </Grid>
            {errors["phone"] ? (
              <ErrorText>{errors["phone"].message}</ErrorText>
            ) : null}
          </Div>
          <Div>
            <Grid alignItems={"center"} templateColumns={"1fr 1fr"}>
              <MyText>Посада</MyText>
              <Input {...register("position")} />
            </Grid>
            {errors["position"] ? (
              <ErrorText>{errors["position"].message}</ErrorText>
            ) : null}
          </Div>
        </ModalBody>
        <ModalFooter>
          <MyButton type="submit">Збегерти</MyButton>
        </ModalFooter>
      </form>
    </Dialog>
  );
}
