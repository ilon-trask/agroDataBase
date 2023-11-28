"use client";
import { ProjectWithUser } from "@/types/ProjectTypes";
import {
  Button,
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
import MyTh from "@/components/ui/MyTh";
import { useRouter } from "next/navigation";
import { DeleteIcon } from "@chakra-ui/icons";
import MyDeleteIcon from "@/components/ui/Icons/MyDeleteIcon";

function ProjectTable({
  projectsData,
  setProjectsData,
}: {
  projectsData: ProjectWithUser[] | [];
  setProjectsData: Dispatch<SetStateAction<ProjectWithUser[]>>;
}) {
  const router = useRouter();
  return (
    <TableContainer maxW={"1100px"} mx={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <MyTh>Назва</MyTh>
            <MyTh>Мета</MyTh>
            <MyTh></MyTh>
            <MyTh></MyTh>
            <MyTh></MyTh>
          </Tr>
        </Thead>
        <Tbody>
          {projectsData.map((el) => (
            <Tr key={el.id}>
              <Td>{el.name}</Td>
              <Td>{el.goal}</Td>
              <Td>
                <Button onClick={() => router.push("/project/" + el.id)}>
                  Докладніше
                </Button>
              </Td>
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
              <Td>
                <MyDeleteIcon />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ProjectTable;
