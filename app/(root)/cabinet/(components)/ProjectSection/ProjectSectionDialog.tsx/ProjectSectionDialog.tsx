"use client";
import Dialog from "@/components/ui/Dialog";
import MyButton from "@/components/ui/MyButton";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import { ProjectWithUser } from "@/types/ProjectTypes";
import {
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import { User } from "@prisma/client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import ServerProjectCreate from "../ServerProjectCreate";
export type ProjectCreateData = {
  name: string;
  goal: string;
};
function ProjectSectionDialog({
  setProjectsData,
}: {
  setProjectsData: Dispatch<SetStateAction<ProjectWithUser[]>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { prismaUser } = usePrismaUserData();
  if (prismaUser == null) throw new Error("Немає прізма юзера");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      goal: "",
    },
  });
  const onSubmit = async (data: ProjectCreateData) => {
    const res = await ServerProjectCreate(data, prismaUser);
    setProjectsData((prev) => [...prev, res]);
    setIsOpen(false);
  };
  return (
    <>
      <MyButton onClick={() => setIsOpen(true)}>Додати проект</MyButton>
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          reset();
        }}
      >
        <ModalHeader>Створення проекту</ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormLabel>
              Назва
              <Input {...register("name", { required: true })} />
            </FormLabel>
            <FormLabel>
              Мета
              <Input {...register("goal", { required: true })} />
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

export default ProjectSectionDialog;
