"use client";

import MyButton from "@/components/ui/MyButton";
import {
  Button,
  Checkbox,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import CreateDocumentTemplate from "./component/CreateDocumentTemplate";
import MyEditIcon from "@/components/ui/Icons/MyEditIcon";
import MyDeleteIcon from "@/components/ui/Icons/MyDeleteIcon";
import { Template } from "@prisma/client";
import publishTemplateDocument from "./funcs/publishTemplateDocument";
import { useRouter } from "next/navigation";

function Documents({ templates }: { templates: Template[] }) {
  const router = useRouter();
  return (
    <>
      <Table size={"sm"}>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Назва шаблону</Th>
            <Th>Підприємство</Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {templates.map((el) => (
            <Tr key={el.id}>
              <Td>
                <MyEditIcon />
              </Td>
              <Td>{el.name}</Td>
              <Td>{}</Td>
              <Td>
                <MyDeleteIcon />
              </Td>
              <Td>
                <Button>Перегляд/друк</Button>
              </Td>
              <Td>
                <Checkbox
                  isChecked={el.isPublic}
                  onChange={async () => {
                    await publishTemplateDocument(el.id);
                    router.refresh();
                  }}
                >
                  Опублікувати
                </Checkbox>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex gap={"24px"}>
        <MyButton onClick={() => router.push("/templates")}>
          Вибрати шаблон
        </MyButton>
        <CreateDocumentTemplate />
      </Flex>
    </>
  );
}

export default Documents;
