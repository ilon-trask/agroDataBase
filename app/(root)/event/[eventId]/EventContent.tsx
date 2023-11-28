"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Div from "@/components/ui/Div";
import MyHeading from "@/components/ui/MyHeading";
import MyButton from "@/components/ui/MyButton";

function EventContent() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <Div>
      {/* <MyHeading>Сторінка заходу</MyHeading>
      <MyButton onClick={handleGoBack}>Повернутись</MyButton> */}
    </Div>
  );
}

export default EventContent;
