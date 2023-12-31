"use client";
import Div from "@/components/ui/Div";
import MyButton from "@/components/ui/MyButton";
import MyText from "@/components/ui/MyText";
import { Badge, Flex, Heading } from "@chakra-ui/react";
import { Document, Template } from "@prisma/client";
import React from "react";

function DocumentContent({
  document,
  template,
}: {
  document: Document;
  template: Template;
}) {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Div>
          <Heading size={"lg"} fontWeight={"semibold"}>
            {template.name}
          </Heading>
          <Heading size={"md"} fontWeight={"semibold"}>
            Назва підприємства
          </Heading>
          <MyText size={"sm"} color={"gray"}>
            {document.calculationPeriod}
          </MyText>
          <Flex gap={"8px"} mt={"8px"}>
            <Badge variant="outline">ОПФ:{document.OPF}</Badge>
            <Badge variant="outline">
              Тип організаційної структури:
              {document.organizationalStructureType}
            </Badge>
          </Flex>
        </Div>
        <Flex gap={"16px"}>
          <MyButton variant={"outline"}>Редагувати</MyButton>
          <MyButton variant={"outline"}>Перегляд/друк</MyButton>
          <MyButton>Зберегти</MyButton>
        </Flex>
      </Flex>
      <Flex justifyContent={"space-between"} mt={"120px"} alignItems={"center"}>
        <Heading size={"sm"}>Працівники</Heading>
        <MyButton>Додати</MyButton>
      </Flex>
    </>
  );
}

export default DocumentContent;
