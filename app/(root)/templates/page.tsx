import MyContainer from "@/components/ui/MyContainer";
import React from "react";
import TemplatesContent from "./TemplatesContent";
import MyHeading from "@/components/ui/MyHeading";

function page() {
  return (
    <MyContainer>
      <MyHeading>Перелік доступних шаблонів</MyHeading>
      <TemplatesContent />
    </MyContainer>
  );
}

export default page;
