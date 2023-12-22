"use server";
import prismadb from "@/lib/prismadb";

async function publishTemplateDocument(templateId: number) {
  const templateData = await prismadb.template.findFirst({
    where: { id: templateId },
  });
  const updatedTemplateData = await prismadb.template.update({
    data: {
      isPublic: !templateData?.isPublic,
    },
    where: { id: templateId },
  });
  return updatedTemplateData;
}

export default publishTemplateDocument;
