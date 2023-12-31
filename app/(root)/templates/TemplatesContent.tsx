"use client";
import Div from "@/components/ui/Div";
import MyButton from "@/components/ui/MyButton";
import { Box, Card, Flex, Grid, Heading, Select, Text } from "@chakra-ui/react";
import React, { createContext, useState } from "react";
import CreateTemplate from "./CreateTemplate";
import { Template } from "@prisma/client";
import OptionIcon from "@/components/ui/Icons/OptionIcon";
import CreateDocumentFromTemplate from "./CreateDocumentFromTemplate/CreateDocumentFromTemplate";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";

function TemplateCard({
  id,
  name,
  onClick,
}: {
  id: number;
  name: string;
  onClick: (id: number) => void;
}) {
  //width={"392px"}
  return (
    <Card p={"20px"}>
      <Box>
        <Flex justifyContent={"space-between"}>
          <Heading fontSize={"24px"} fontWeight={"semibold"} height={"60px"}>
            {name}
          </Heading>
          <OptionIcon />
        </Flex>
        <Text fontWeight={"medium"} fontSize={"16px"} mt={"8px"}>
          Опис шаблону
        </Text>
      </Box>

      <Flex mt={"32px"} justifyContent={"end"} gap={"8px"}>
        <MyButton variant={"outline"}>Переглянути зразок</MyButton>
        <MyButton onClick={() => onClick(id)}>Перейти</MyButton>
      </Flex>
    </Card>
  );
}

function TemplatesContent({ templates }: { templates: Template[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenId, setChosenId] = useState(0);

  const onClick = (id: number) => {
    console.log(id);
    setIsOpen(true);
    setChosenId(id);
  };
  const { prismaUser } = usePrismaUserData();
  return (
    <Div>
      <Flex>
        <Select>
          <option value="">ОПФ</option>
        </Select>
        <Select>
          <option value="">Організаційна структура</option>
        </Select>
        <Select>
          <option value="">Періодичність розрахунку</option>
        </Select>
        <Select>
          <option value="">Назва документу</option>
        </Select>
      </Flex>
      <Grid templateColumns={"1fr 1fr 1fr 1fr"}>
        {templates.map((el) => (
          <TemplateCard
            id={el.id}
            name={el.name}
            key={el.id}
            onClick={onClick}
          />
        ))}
      </Grid>
      {prismaUser && (
        <CreateDocumentFromTemplate
          templates={templates}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          chosenId={chosenId}
        />
      )}
    </Div>
  );
}

export default TemplatesContent;
