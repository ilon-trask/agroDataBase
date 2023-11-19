import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import MyText from "@/components/ui/MyText";
import React from "react";

function page({ params: { projectId } }: { params: { projectId: number } }) {
  return (
    <MyContainer>
      <MyHeading>Landing page проекту </MyHeading>
      <MyText>{projectId}</MyText>
    </MyContainer>
  );
}

export default page;
