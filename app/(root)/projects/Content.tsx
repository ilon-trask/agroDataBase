"use client";

import Div from "@/components/ui/Div";
import MyButton from "@/components/ui/MyButton";
import MyText from "@/components/ui/MyText";
import getDistricts from "@/hooks/getDistricts";
import { ProjectWithUser } from "@/types/ProjectTypes";
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
import { useRouter } from "next/navigation";
import React from "react";
import colors from "@/components/ui/ColorConsts";
const districts = getDistricts();

function Content({ projects }: { projects: ProjectWithUser[] }) {
  const router = useRouter();
  return (
    <Flex justifyContent={"space-between"}>
      <Div width={"20%"}></Div>
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
              Тематика
            </option>
          </Select>
          <Select>
            <option value="" hidden defaultChecked>
              Ініціатори
            </option>
          </Select>
        </Flex>
        <Grid gridTemplateColumns={"repeat(3,1fr)"} gap={"10px"} mt={"10px"}>
          {projects.map((el) => (
            <Card maxW="sm" key={el.id}>
              <CardBody>
                <Stack mt="2" spacing="1">
                  <Heading size="lg" color={colors.primaryColor}>
                    {el.name}
                  </Heading>
                  <MyText mt={2}>Керівник: {el.goal}</MyText>
                  <MyText>Координатор: {el.goal}</MyText>
                  <MyText>Статус: {el.goal}</MyText>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <MyButton variant="solid" colorScheme="blue">
                    Підтримати проект
                  </MyButton>
                  <MyButton
                    variant="ghost"
                    colorScheme="blue"
                    onClick={() => router.push("/project/" + el.id)}
                  >
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
