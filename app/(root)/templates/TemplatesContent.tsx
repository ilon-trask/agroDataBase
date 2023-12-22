"use client";
import Div from "@/components/ui/Div";
import MyButton from "@/components/ui/MyButton";
import { Box, Card, Flex, Grid, Heading, Select, Text } from "@chakra-ui/react";
import React from "react";
import CreateTemplate from "./CreateTemplate";
import { Template } from "@prisma/client";
import OptionIcon from "@/components/ui/Icons/OptionIcon";

function TemplateCard({ name }: { name: string }) {
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
        <MyButton>Перейти</MyButton>
      </Flex>
    </Card>
  );
}

function TemplatesContent({ templates }: { templates: Template[] }) {
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
          <TemplateCard name={el.name} key={el.id} />
        ))}
      </Grid>
    </Div>
  );
}

export default TemplatesContent;
