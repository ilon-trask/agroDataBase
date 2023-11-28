"use client";
import Div from "@/components/ui/Div";
import MyButton from "@/components/ui/MyButton";
import MyText from "@/components/ui/MyText";
import getDistricts from "@/hooks/getDistricts";
import useGetDateFromDate from "@/hooks/useGetDateFromDate";
import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Grid,
  Heading,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import colors from "@/components/ui/ColorConsts";
import { Event } from "@prisma/client";
const districts = getDistricts();

function Content({ events }: { events: Event[] | [] }) {
  const currDate = new Date();
  const currMonth = currDate.getMonth();
  const currDay = currDate.getDay();
  const currDayOfMonth = currDate.getDate();
  const [year, setYear] = useState(currDate.getFullYear());
  const [month, setMonth] = useState(currMonth);
  const [startDay, setStartDay] = useState(currDay - (currDayOfMonth % 7));
  const months = [
    { name: "Січень", amount: 31 },
    { name: "Лютий", amount: year == 2024 ? 29 : 28 },
    { name: "Березень", amount: 31 },
    { name: "Квітень", amount: 30 },
    { name: "Травень", amount: 31 },
    { name: "Червень", amount: 30 },
    { name: "Липень", amount: 31 },
    { name: "Серпень", amount: 31 },
    { name: "Вересень", amount: 30 },
    { name: "Жовтень", amount: 31 },
    { name: "Листопад", amount: 30 },
    { name: "Грудень", amount: 31 },
  ];
  return (
    <Flex justifyContent={"space-between"}>
      <Div width={"20%"}>
        <Div>
          <Div>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <MyButton
                onClick={() =>
                  setMonth((prev) => {
                    const value = prev - 1;
                    setStartDay(
                      (day) => 7 - ((months[month - 1]?.amount - day) % 7)
                    );
                    if (value <= 0) {
                      setYear((year) => (year -= 1));
                      return 11;
                    }
                    return value;
                  })
                }
              >
                Назад
              </MyButton>
              <MyText>{months[month]?.name + " " + year}</MyText>
              <MyButton
                onClick={() => {
                  setMonth((prev) => {
                    const value = prev + 1;
                    setStartDay((day) => (day + months[month]?.amount) % 7);
                    if (value >= 12) {
                      setYear((year) => (year += 1));
                      return 0;
                    }
                    return value;
                  });
                }}
              >
                Вперед
              </MyButton>
            </Flex>
          </Div>
          <Grid gridTemplateColumns={"repeat(7,1fr)"}>
            <Div fontWeight={"bold"}>П</Div>
            <Div fontWeight={"bold"}>В</Div>
            <Div fontWeight={"bold"}>С</Div>
            <Div fontWeight={"bold"}>Ч</Div>
            <Div fontWeight={"bold"}>П</Div>
            <Div fontWeight={"bold"}>С</Div>
            <Div fontWeight={"bold"}>Н</Div>
            {Array.from({ length: startDay }, (_, i) => i + 1).map((el) => (
              <Div height={"100%"} key={el}></Div>
            ))}
            {(() => {
              const arr = Array.from(
                { length: months[month]?.amount },
                (_, i) => i + 1
              );
              return arr.map((el) => (
                <Div height={"100%"} key={el}>
                  {el}
                </Div>
              ));
            })()}
          </Grid>
        </Div>
      </Div>
      <Div width={"75%"}>
        <Flex gap={"10px"}>
          <Select>
            <option value="" hidden defaultChecked>
              Області
            </option>
            {districts.map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </Select>
          <Select>
            <option value="" hidden defaultChecked>
              Вид
            </option>
          </Select>
          <Select>
            <option value="" hidden defaultChecked>
              Тематика
            </option>
          </Select>
          <Select>
            <option value="" hidden defaultChecked>
              Спеціалізації
            </option>
          </Select>
          <Select>
            <option value="" hidden defaultChecked>
              Ініціатори
            </option>
          </Select>
          <Select>
            <option value="" hidden defaultChecked>
              ОТГ
            </option>
          </Select>
        </Flex>
        <Grid gridTemplateColumns={"repeat(3,1fr)"} gap={"10px"} mt={"10px"}>
          {events.map((el) => (
            <Card maxW="sm" key={el.id}>
              <CardBody>
                <Stack mt="2" spacing="1">
                  <Heading size="lg" color={colors.primaryColor}>
                    {el.name}
                  </Heading>
                  <MyText mt={2}>Дата: {useGetDateFromDate(el.date)}</MyText>
                  <MyText>Тематика: {el.direction}</MyText>
                  <MyText>Область: {el.district}</MyText>
                  <MyText>Спеціалізація: {el.specialization}</MyText>
                  <MyText>Вид: {el.type}</MyText>
                  <MyText>Ініціатор: {/* Активний|Проведений*/}</MyText>
                  <MyText>Статус: {/* Активний|Проведений*/}</MyText>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <MyButton variant="solid" colorScheme="blue">
                    Забронювати місце
                  </MyButton>
                  <MyButton variant="ghost" colorScheme="blue">
                    Докладніше
                  </MyButton>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Div>
    </Flex>
  );
}

export default Content;
