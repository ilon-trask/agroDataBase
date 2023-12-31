"use server";
import prismadb from "@/lib/prismadb";
import { CreateTemplate } from "../component/CreateDocumentTemplate";

async function createTemplateDocument(value: CreateTemplate, userId: number) {
  const createdTemplateData = await prismadb.template.create({
    data: { ...value, userId },
  });
  return createdTemplateData;
}

export default createTemplateDocument;
