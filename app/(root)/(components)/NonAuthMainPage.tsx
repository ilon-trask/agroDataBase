"use client";
import Div from "@/components/ui/Div";
import MyContainer from "@/components/ui/MyContainer";
import React, { useRef } from "react";
import MyHeading from "@/components/ui/MyHeading";
import MyButton from "@/components/ui/MyButton";
import { EventWithUser } from "@/types/DemonstrationActivitiesTypes";
// import { Region } from "@prisma/client";
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
import PageContent from "./PageContent";

export default function NonAuthMainPage({
  events,
  projects,
  offers,
}: {
  events: EventWithUser[];
  projects: ProjectWithUser[];
  offers: OfferWithUserAndPOU[];
}) {
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
        <PageContent events={events} offers={offers} projects={projects} />
      </MyContainer>
    </>
  );
}
