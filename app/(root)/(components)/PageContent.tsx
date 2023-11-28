"use client";
import Div from "@/components/ui/Div";
import MyHeading from "@/components/ui/MyHeading";
import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
import ArrowIcon from "@/components/ui/Icons/ArrowIcon";
import ProjectsContent from "../projects/Content";
import { EventWithUser } from "@/types/DemonstrationActivitiesTypes";
import { ProjectWithUser } from "@/types/ProjectTypes";
import { OfferWithUserAndPOU } from "@/types/OfferTypes";
import colors from "@/components/ui/ColorConsts";
import MyText from "@/components/ui/MyText";
import MyButton from "@/components/ui/MyButton";
import Content from "../events/Content";
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

function PageContent({
  events,
  // regions,

  projects,
  offers,
}: {
  events: EventWithUser[];
  // regions: Region[];

  projects: ProjectWithUser[];
  offers: OfferWithUserAndPOU[];
}) {
  const router = useRouter();
  return (
    <>
      <Flex justifyContent={"space-between"} mt={"160px"} alignItems={"center"}>
        <MyHeading>Рекомендовані проекти</MyHeading>
        <Div cursor={"pointer"} onClick={() => router.push("/projects")}>
          <ArrowIcon />
        </Div>
      </Flex>
      <Div mt={"90px"}>
        <ProjectsContent projects={projects} />
      </Div>
      <Flex justifyContent={"space-between"} mt={"280px"} alignItems={"center"}>
        <MyHeading>Рекомендовані заходи</MyHeading>
        <Div cursor={"pointer"} onClick={() => router.push("/events")}>
          <ArrowIcon />
        </Div>
      </Flex>
      <Div mt={"90px"}>
        <Content events={events} />
      </Div>

      <Flex justifyContent={"space-between"} mt={"160px"} alignItems={"center"}>
        <MyHeading>Рекомендовані пропозиції</MyHeading>
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
      <Flex justifyContent={"space-between"} mt={"160px"} alignItems={"center"}>
        <MyHeading>Рекомендовані договори</MyHeading>
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
    </>
  );
}

export default PageContent;
