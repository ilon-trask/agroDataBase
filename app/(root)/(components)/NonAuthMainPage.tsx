"use client";
import Div from "@/components/ui/Div";
import MyContainer from "@/components/ui/MyContainer";
import React, { useRef } from "react";
import MyHeading from "@/components/ui/MyHeading";
import MyButton from "@/components/ui/MyButton";
import { EventWithUser } from "@/types/DemonstrationActivitiesTypes";
// import { Region } from "@prisma/client";
import Title from "@/components/ui/Title";
import { Flex } from "@chakra-ui/react";
import colors from "@/components/ui/ColorConsts";

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
        <Title width={"800px"} mt={"100px"}>
          Документи з шаблонів і на замовлення
        </Title>
        <Flex
          mt={"50px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"800px"}
        >
          <MyText fontWeight={"semibold"} fontSize={"32px"}>
            Типовий документ
          </MyText>
          <MyButton
            variant={"ghost"}
            onClick={() => {
              router.push("/templates");
            }}
          >
            Вибрати
          </MyButton>
        </Flex>
        <PageContent events={events} offers={offers} projects={projects} />
      </MyContainer>
    </>
  );
}
