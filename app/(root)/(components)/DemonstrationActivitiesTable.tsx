"use client";
import PublishEvent from "@/hooks/PublishEvent";
import useGetDateFromDate from "@/hooks/useGetDateFromDate";
import { useActivitiesData } from "@/hooks/use_activitiesData";
import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";
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
import { DemonstrationActivity } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type props = {
  activities: DemonstrationActivityWithUser[] | [];
} & (
  | {
      isCabinet: true;
      setIsUpdate: Dispatch<SetStateAction<boolean>>;
      setIsOpen: Dispatch<SetStateAction<boolean>>;
    }
  | { isCabinet: false }
);
export default function DemonstrationActivitiesTable(props: props) {
  const [activitiesData, setActivitiesData] = useState<
    DemonstrationActivityWithUser[]
  >(props.activities);
  const { activities, setActivities } = useActivitiesData();
  const router = useRouter();
  useEffect(() => {
    if (!activities[0]) setActivities(activitiesData);
  }, []);
  useEffect(() => setActivitiesData(activities), [activities]);
  return (
    <TableContainer maxW={"1100px"} mx={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>Дата</Th>
            <Th>Назва заходу</Th>
            <Th>Ініціатор</Th>
            <Th>Тематика</Th>
            <Th>Регіон</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {activitiesData.length > 0 ? (
            activitiesData.map((el) => (
              <Tr key={el.id}>
                <Td>{useGetDateFromDate(el.date)}</Td>
                <Td>{el.name}</Td>
                <Td>{el.user.firstName + " " + el.user.secondName}</Td>
                <Td>{el.direction}</Td>
                <Td>{el.district}</Td>
                <Td>Додатково</Td>
                <Td>
                  <Checkbox
                    key={el.id}
                    isChecked={el.isPublic}
                    onChange={async (e) => {
                      const res = await PublishEvent(el.id, !el.isPublic);
                      setActivitiesData((prev) => {
                        prev = prev.filter((e) => e.id != el.id);
                        prev.push(res);
                        prev.sort((a, b) => a.id - b.id);
                        return prev;
                      });
                      router.refresh();
                    }}
                  >
                    Опублікувати
                  </Checkbox>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td></Td>
              <Td>Немає данних</Td>
              <Td></Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
