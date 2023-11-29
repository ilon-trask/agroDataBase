import Div from "@/components/ui/Div";
import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import MyText from "@/components/ui/MyText";
import prismadb from "@/lib/prismadb";
import React from "react";
import ProjectContent from "./ProjectContent";

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
      <MyHeading>Проект</MyHeading>
      <MyText>{projectId}</MyText>
      <ProjectContent project={project} />
    </MyContainer>
  );
}

export default page;
