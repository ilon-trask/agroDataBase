"use client";
import Div from "@/components/ui/Div";
import MyButton from "@/components/ui/MyButton";
import { Flex, Select } from "@chakra-ui/react";
import React from "react";
import CreateTemplate from "./CreateTemplate";

function TemplatesContent() {
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
      <Flex></Flex>
      <CreateTemplate />
    </Div>
  );
}

export default TemplatesContent;
