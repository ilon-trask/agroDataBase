"use client";
import { ProjectWithUser } from "@/types/ProjectTypes";
import {
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import ProjectServeActions from "../cabinet/(components)/ProjectSection/ServerProjectCreate";
import ProjectPublish from "../cabinet/(components)/ProjectSection/ServerProjectPublish";

function ProjectTable({
  projectsData,
  setProjectsData,
}: {
  projectsData: ProjectWithUser[] | [];
  setProjectsData: Dispatch<SetStateAction<ProjectWithUser[]>>;
}) {
  return (
    <TableContainer maxW={"1100px"} mx={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>Назва</Th>
            <Th>Мета</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {projectsData.map((el) => (
            <Tr key={el.id}>
              <Td>{el.name}</Td>
              <Td>{el.goal}</Td>
              <Td>
                <Checkbox
                  isChecked={el.isPublic}
                  key={el.id}
                  onChange={async () => {
                    const res = await ProjectPublish(el.id, !el.isPublic);
                    setProjectsData((prev) => {
                      prev = prev.filter((e) => e.id != el.id);
                      prev.push(res);
                      prev.sort((a, b) => a.id - b.id);
                      return prev;
                    });
                  }}
                >
                  Опублікувати
                </Checkbox>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ProjectTable;
