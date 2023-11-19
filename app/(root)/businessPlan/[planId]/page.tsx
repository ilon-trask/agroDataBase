import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import React from "react";
import BusinessPlanQuiz from "./components/BusinessPlanQuiz";

export default function Home({ params }: { params: { planId: string } }) {
  return (
    <MyContainer>
      <MyHeading>Бізнес-план</MyHeading>
      <BusinessPlanQuiz />
    </MyContainer>
  );
}
