"use client";
import MyButton from "@/components/ui/MyButton";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import createTemplateDocument from "../funcs/createTemplateDocument";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import { useRouter } from "next/navigation";

export type CreateTemplate = {
  name: string;
  description: string;
  pOUId?: string;
};

function CreateDocumentTemplate() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useMemo(() => useRouter(), []);
  const onClose = () => {
    setIsOpen(false);
  };
  const { prismaUser } = usePrismaUserData();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<CreateTemplate>({});
  const onSubmit: SubmitHandler<CreateTemplate> = async (
    value: CreateTemplate
  ) => {
    if (!prismaUser) throw new Error("no prisma user");
    await createTemplateDocument(value, prismaUser.id);
    router.refresh();
    onClose();
    reset();
  };
  return (
    <>
      <MyButton variant={"outline"} onClick={() => setIsOpen(true)}>
        Створити шаблон
      </MyButton>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Створення шаблону документу</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <FormControl>
                <FormLabel>Назва шаблону</FormLabel>
                <Input {...register("name", { required: true })} />
              </FormControl>
              <FormControl>
                <FormLabel>Опис шаблону</FormLabel>
                <Input {...register("description", { required: true })} />
              </FormControl>
              <FormControl>
                <FormLabel>Підприємство</FormLabel>
                <Select {...register("pOUId")}></Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <MyButton type="submit">Зберегти</MyButton>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateDocumentTemplate;
