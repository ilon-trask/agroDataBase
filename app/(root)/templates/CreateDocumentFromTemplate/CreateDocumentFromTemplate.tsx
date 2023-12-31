"use client";
import MyButton from "@/components/ui/MyButton";
import {
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { Template } from "@prisma/client";
import MyText from "@/components/ui/MyText";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  CreateDocumentType,
  SubmitCreateDocumentFromTemplate,
} from "./SubmitCreateDocumentFromTemplate";
import getPrismaUser from "@/app/(auth)/sing-in/getPrismaUser";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";

//
//цей компонент налаштовує документ який створюється з шаблону
//

function CreateDocumentFromTemplate({
  templates,
  isOpen,
  setIsOpen,
  chosenId,
  isUpdate,
  setIsUpdate,
}: {
  templates: Template[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  chosenId: number;
  isUpdate?: boolean;
  setIsUpdate?: Dispatch<SetStateAction<boolean>>;
}) {
  const onClose = () => setIsOpen(false);
  const thisTemplate = templates.find((el) => el.id == chosenId);
  const { prismaUser } = usePrismaUserData();
  if (prismaUser == null) throw new Error("Немає прізма юзера");
  const router = useRouter();
  const onSubmit = async (data: CreateDocumentFormType) => {
    if (isUpdate) {
    } else {
      if (thisTemplate == null) throw new Error("Шаблон не знайдено");
      const res = await SubmitCreateDocumentFromTemplate({
        ...data,
        pOUId: data.pOUId || null,
        name:
          thisTemplate.name +
          data.OPF +
          data.organizationalStructureType +
          data.calculationPeriod,
        templateId: thisTemplate?.id,
        userId: prismaUser.id,
      });
      router.push("/document/" + res.id);
    }
    reset();
  };
  type CreateDocumentFormType = Omit<
    CreateDocumentType,
    "userId" | "templateId" | "name"
  >;
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<CreateDocumentFormType>({});
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Налаштування шаблону</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MyText textAlign={"left"}>{thisTemplate?.name}</MyText>
            <FormControl>
              <FormLabel>Виберіть підприємство</FormLabel>
              <Select {...register("pOUId")}>
                <option defaultChecked hidden value={""}>
                  Виберіть підприємство
                </option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Організаційно-правова форма (ОПФ)</FormLabel>
              <Select {...register("OPF", { required: true })}>
                <option defaultChecked hidden value={""}>
                  Виберіть форму
                </option>
                {[
                  "Всі",
                  "(110) Фермерське господарство",
                  "(240) Товариство з обмеженою відповідальністю",
                  "(910) Підприємець - фізична особа",
                ].map((el) => (
                  <option value={el} key={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Тип організаційної структури</FormLabel>
              <Select
                {...register("organizationalStructureType", {
                  required: true,
                })}
              >
                <option defaultChecked hidden value={""}>
                  Виберіть тип
                </option>
                {["Лінійна", "Функціональна", "Проектно-функціональна"].map(
                  (el) => (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  )
                )}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Період розрахунку</FormLabel>
              <Select {...register("calculationPeriod", { required: true })}>
                <option defaultChecked hidden value={""}>
                  Виберіть період
                </option>
                {["За рік помісячно", "За рік поквартально", "За рік"].map(
                  (el) => (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  )
                )}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <MyButton type="submit">Зберегти</MyButton>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default CreateDocumentFromTemplate;
