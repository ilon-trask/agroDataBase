import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import React from "react";
import DocumentContent from "./DocumentContent";
import prismadb from "@/lib/prismadb";

async function page(props: { params: { documentId: "2" }; searchParams: {} }) {
  const document = await prismadb.document.findFirst({
    where: { id: +props.params.documentId },
  });
  if (!document) throw new Error("Документ не знайдено");
  const template = await prismadb.template.findFirst({
    where: { id: document?.templateId },
  });
  if (!template) throw new Error("Шаблон не знайдено");
  return (
    <MyContainer>
      <MyHeading mt={"100px"}>Шаблон</MyHeading>
      <DocumentContent document={document} template={template} />
    </MyContainer>
  );
}

export default page;
