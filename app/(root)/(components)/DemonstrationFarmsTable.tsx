"use client";
import MyViewIcon from "@/components/ui/Icons/MyViewIcon";
import MyButton from "@/components/ui/MyButton";
import MyText from "@/components/ui/MyText";
import { useFarmsData } from "@/hooks/use_farmsData";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
type props = { farms: POUWithSpecialization[] } & (
  | {
      isCabinet: true;
      setIsUpdate: Dispatch<SetStateAction<boolean>>;
      setIsOpen: Dispatch<SetStateAction<boolean>>;
    }
  | { isCabinet: false }
);
export default function DemonstrationFarmsTable(props: props) {
  const [farmsData, setFarmsData] = useState<POUWithSpecialization[]>(
    props.farms
  );
  const { farms, setFarms } = useFarmsData();
  useEffect(() => {
    if (!farms[0]) setFarms(farmsData);
  }, []);
  useEffect(() => setFarmsData(farms), [farms]);
  const router = useRouter();
  return (
    <TableContainer maxW={"1100px"} mx={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>Назва</Th>
            <Th>Спеціалізація</Th>
            <Th>Інтегральний показник</Th>
            {props.isCabinet && <Th>Інформація</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {farmsData.length > 0 ? (
            farmsData.map((el) => (
              <Tr key={el.id}>
                <Td>
                  {props.isCabinet ? (
                    <MyText
                      cursor={"pointer"}
                      fontWeight={"semibold"}
                      onClick={() => router.push("/farmDataView/" + el.id)}
                    >
                      <MyViewIcon /> {el.name}
                    </MyText>
                  ) : (
                    <MyText>{el.name}</MyText>
                  )}
                </Td>
                <Td></Td>
                <Td>{}</Td>
                {props.isCabinet && (
                  <Td>
                    <MyButton
                      size={"sm"}
                      onClick={() => router.push(`/farmData/${el.id}`)}
                    >
                      Додати
                    </MyButton>
                  </Td>
                )}
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
