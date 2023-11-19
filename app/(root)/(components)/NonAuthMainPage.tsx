"use client";
import Div from "@/components/ui/Div";
import MyContainer from "@/components/ui/MyContainer";
import React, { useRef } from "react";
import MyHeading from "@/components/ui/MyHeading";
import MyButton from "@/components/ui/MyButton";
import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";
import { Region } from "@prisma/client";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import Title from "@/components/ui/Title";
import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import colors from "@/components/ui/ColorConsts";
import ArrowIcon from "@/components/ui/Icons/ArrowIcon";
import EventContent from "../events/Content";
import ProjectsContent from "../projects/Content";
import { ProjectWithUser } from "@/types/ProjectTypes";
import { OfferWithUserAndPOU } from "@/types/OfferTypes";
import MyText from "@/components/ui/MyText";
import { useRouter } from "next/navigation";

function offerCard(el: OfferWithUserAndPOU) {
  return (
    <Card maxW="sm" key={el.id}>
      <CardBody>
        <Stack mt="2" spacing="1">
          <Heading size="lg" color={colors.primaryColor}>
            {el.description}
          </Heading>
          <MyText mt={2}>Контактна особо: {el.user.firstName}</MyText>
          <MyText>ПОУ: {el.POU?.name || "Особиста пропозиція"}</MyText>
          <MyText>Статус: {}</MyText>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <MyButton variant="solid" colorScheme="blue">
            Зв'язатись
          </MyButton>
          <MyButton
            variant="ghost"
            colorScheme="blue"
            // onClick={() => router.push("/project/" + el.id)}
          >
            Докладніше
          </MyButton>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default function NonAuthMainPage({
  activities,
  regions,
  farms,
  projects,
  offers,
}: {
  activities: DemonstrationActivityWithUser[];
  regions: Region[];
  farms: POUWithSpecialization[];
  projects: ProjectWithUser[];
  offers: OfferWithUserAndPOU[];
}) {
  const activitiesRef = useRef<HTMLElement>();
  const farmRef = useRef<HTMLElement>();
  const coachRef = useRef<HTMLElement>();
  const communityRef = useRef<HTMLElement>();
  const router = useRouter();
  return (
    <>
      <MyContainer>
        <Title width={"1064px"} textAlign={"center"} mx={"auto"} mt={"100px"}>
          Найкорисніша площадка для аграріїв в Україні
        </Title>
        <Flex
          justifyContent={"space-between"}
          width={"1000px"}
          mx={"auto"}
          mt={"24px"}
        >
          <Text
            textAlign={"center"}
            color={colors.secondaryColor}
            fontWeight={"semibold"}
            width={"260px"}
            fontSize={"20px"}
          >
            Створення та пошук актуальних заходів
          </Text>
          <Text
            textAlign={"center"}
            color={colors.secondaryColor}
            fontWeight={"semibold"}
            width={"260px"}
            fontSize={"20px"}
          >
            Започаткувати або&nbsp;підтримати проект
          </Text>
          <Text
            textAlign={"center"}
            color={colors.secondaryColor}
            fontWeight={"semibold"}
            width={"260px"}
            fontSize={"20px"}
          >
            Долучитися до спільноти вигідних партнерів
          </Text>
        </Flex>
        <Flex justifyContent={"center"} gap={"24px"} mt={"40px"}>
          <MyButton>Спробувати</MyButton>
          <MyButton variant={"outline"}>Дізнатися більше</MyButton>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          mt={"280px"}
          alignItems={"center"}
        >
          <MyHeading>Рекомендовані заходи</MyHeading>
          <Div
            cursor={"pointer"}
            onClick={() => {
              router.push("/events");
            }}
          >
            <ArrowIcon />
          </Div>
        </Flex>
        <Div mt={"90px"}>
          <EventContent events={activities} />
        </Div>
        <Flex
          justifyContent={"space-between"}
          mt={"160px"}
          alignItems={"center"}
        >
          <MyHeading>Рекомендовані проекти</MyHeading>
          <Div
            cursor={"pointer"}
            onClick={() => {
              router.push("/projects");
            }}
          >
            <ArrowIcon />
          </Div>
        </Flex>
        <Div mt={"90px"}>
          <ProjectsContent projects={projects} />
        </Div>
        <Flex
          justifyContent={"space-between"}
          mt={"160px"}
          alignItems={"center"}
        >
          <MyHeading>Рекомендовані покупці</MyHeading>
          <ArrowIcon />
        </Flex>
        <Div mt={"90px"}>
          <Flex justifyContent={"space-between"}>
            <Div width={"20%"}></Div>
            <Div width={"75%"}>
              {offers
                .filter((el) => el.type == "Купівля")
                .map((el) => offerCard(el))}
            </Div>
          </Flex>
        </Div>
        <Flex
          justifyContent={"space-between"}
          mt={"160px"}
          alignItems={"center"}
        >
          <MyHeading>Рекомендовані продавці</MyHeading>
          <ArrowIcon />
        </Flex>
        <Div mt={"90px"}>
          <Flex justifyContent={"space-between"}>
            <Div width={"20%"}></Div>
            <Div width={"75%"}>
              {offers
                .filter((el) => el.type == "Продаж")
                .map((el) => offerCard(el))}
            </Div>
          </Flex>
        </Div>
        <MyHeading mt={"160px"} textAlign={"left"}>
          Про нас
        </MyHeading>
        <Div mt={"160px"}></Div>
      </MyContainer>
    </>
  );
}
