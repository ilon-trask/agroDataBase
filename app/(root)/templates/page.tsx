import MyContainer from "@/components/ui/MyContainer";
import React from "react";
import TemplatesContent from "./TemplatesContent";
import MyHeading from "@/components/ui/MyHeading";
import prismadb from "@/lib/prismadb";
import createServerClient from "@/lib/createServerClient";

async function page() {
  const templates = await prismadb.template.findMany({
    where: { isPublic: true },
  });
  return (
    <MyContainer>
      <MyHeading>Перелік доступних шаблонів</MyHeading>
      <TemplatesContent templates={templates} />
    </MyContainer>
  );
}

export default page;
