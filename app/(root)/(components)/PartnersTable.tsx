"use client";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export default function PartnersTable() {
  return (
    <TableContainer maxW={"1100px"} mx={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>Назва</Th>
            <Th>Проекти</Th>
            <Th>Статус проекту</Th>
            <Th>Контакти</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td></Td>
            <Td>Немає данних</Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
