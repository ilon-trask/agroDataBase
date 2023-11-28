import Div from "@/components/ui/Div";
import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import MyText from "@/components/ui/MyText";
import prismadb from "@/lib/prismadb";
import React from "react";

async function page({
  params: { projectId },
}: {
  params: { projectId: number };
}) {
  const project = await prismadb.project.findFirst({
    where: {
      id: +projectId,
    },
  });
  return (
    <MyContainer>
      <MyHeading>Landing page проекту </MyHeading>
      <MyText>{projectId}</MyText>
      <Div display={"flex"}>
        <Div width={"50%"}></Div>
        <Div width={"50%"}>
          <MyHeading textAlign={"left"}>Назва </MyHeading>
          <MyText>{project?.name}</MyText>
          <MyHeading textAlign={"left"}>Мета </MyHeading>
          <MyText>{project?.goal}</MyText>
        </Div>
      </Div>
    </MyContainer>
  );
}

export default page;
