"use client";
import React, { useState } from "react";
import OfferDialog from "./OfferDialog";
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
import { OfferWithUserAndPOU } from "@/types/OfferTypes";
import MyButton from "@/components/ui/MyButton";
import PublishOffer from "./PublishOffer";

function OfferSection({ offers }: { offers: OfferWithUserAndPOU[] }) {
  const [offersData, setOffersData] = useState<OfferWithUserAndPOU[]>(offers);
  return (
    <>
      <TableContainer maxW={"1100px"} mx={"auto"}>
        <Table>
          <Thead>
            <Tr>
              <Th>Опис</Th>
              <Th>ПОУ</Th>
              <Th>Вид</Th>
              <Th>Категорія</Th>
            </Tr>
          </Thead>
          <Tbody>
            {offersData.map((el) => (
              <Tr key={el.id}>
                <Td>{el.description}</Td>
                <Td>{el.POU?.name || "Особиста пропозиція"}</Td>
                <Td>{el.type}</Td>
                <Td>{el.category}</Td>
                <Td>
                  <MyButton>Деталі</MyButton>
                </Td>
                <Td>
                  <Checkbox
                    key={el.id}
                    isChecked={el.isPublic}
                    onChange={async () => {
                      const res = await PublishOffer(el.id, !el.isPublic);
                      setOffersData((prev) => {
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
      <OfferDialog setOffersData={setOffersData} />
    </>
  );
}

export default OfferSection;
