"use client";
import MyButton from "@/components/ui/MyButton";
import MyContainer from "@/components/ui/MyContainer";
import Title from "@/components/ui/Title";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import PageContent from "./PageContent";
import { EventWithUser } from "@/types/DemonstrationActivitiesTypes";
import { ProjectWithUser } from "@/types/ProjectTypes";
import { OfferWithUserAndPOU } from "@/types/OfferTypes";
import colors from "@/components/ui/ColorConsts";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import { useRouter } from "next/navigation";
import { useUserDataModal } from "@/hooks/use-userData-modal";

function MainPage({
  events,
  projects,
  offers,
}: {
  events: EventWithUser[];
  projects: ProjectWithUser[];
  offers: OfferWithUserAndPOU[];
}) {
  const { prismaUser, setPrismaUser } = usePrismaUserData();
  const router = useRouter();
  const { onOpen } = useUserDataModal();
  return prismaUser ? (
    <MyContainer>
      <Title width={"1330px"} textAlign={"center"} mx={"auto"} mt={"100px"}>
        Щоб створювати свої проекти, заходи, ПОУ та пропозиції перейдіть в
        персональний кабінет!
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
        <MyButton onClick={() => router.push("/cabinet")}>Перейти</MyButton>
        <MyButton variant={"outline"}>Дізнатися більше</MyButton>
      </Flex>
      <PageContent events={events} offers={offers} projects={projects} />
      {/*
            <MyHeading>Демонстраційні заходи</MyHeading>
            <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
              <Div>
                <MyText>Фільтри</MyText>
              </Div>
              {/* <Div>
                <DemonstrationActivitiesTable
                  activities={activities}
                  isCabinet={false}
                />
              </Div> 
            </Div>
            <MyHeading>Демонстраційні ферми</MyHeading>
            <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
              <Div>
                <MyText>Фільтри</MyText>
              </Div>
              <Div>
                <DemonstrationFarmsTable isCabinet={false} farms={farms} />
              </Div>
            </Div>
            <MyHeading>Дорадчі служби та дорадники</MyHeading>
            <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
              <Div>
                <MyText>Фільтри</MyText>
              </Div>
              <Div>
                <AdvisoryServicesTable />
              </Div>
            </Div>
            <MyHeading>Об'єднані територіальні громади</MyHeading>
            <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
              <Div>
                <MyText>Фільтри</MyText>
              </Div>
              <Div>
                <TerritorialCommunitiesTable />
              </Div>
            </Div>
            <MyHeading>Партнери УМДФ</MyHeading>
            <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
              <Div>
                <MyText>Фільтри</MyText>
              </Div>
              <Div>
                <PartnersTable />
              </Div>
            </Div>
            <MyHeading>Бізнес-план</MyHeading>
            <Div display={"grid"} gridTemplateColumns={"1fr 3fr"}>
              <Div>
                <MyText>Фільтри</MyText>
              </Div>
              <Div>{/* <BusinessPlanSection showTags={false} /> </Div>
            </Div> */}
    </MyContainer>
  ) : (
    <MyContainer>
      <Title width={"1350px"} textAlign={"center"} mx={"auto"} mt={"100px"}>
        Щоб створювати свої проекти, заходи, ПОУ та пропозиції створіть
        персональний кабінет!
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
        <MyButton onClick={() => onOpen()}>Створити</MyButton>
        <MyButton variant={"outline"}>Дізнатися більше</MyButton>
      </Flex>
      <PageContent events={events} offers={offers} projects={projects} />
    </MyContainer>
  );
}

export default MainPage;
