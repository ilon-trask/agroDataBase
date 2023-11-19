import MyHeading from "@/components/ui/MyHeading";
import React from "react";
import Content from "./Content";
import MyContainer from "@/components/ui/MyContainer";
import getProjectPublic from "@/hooks/getProjectsPublic";

async function Projects() {
  const projects = await getProjectPublic();
  return (
    <MyContainer>
      <MyHeading>Проекти</MyHeading>
      <Content projects={projects} />
    </MyContainer>
  );
}

export default Projects;
