"use server";

import prismadb from "@/lib/prismadb";
export type CreateDocumentType = {
  calculationPeriod: string;
  name: string;
  OPF: string;
  organizationalStructureType: string;
  pOUId: number | null;
  templateId: number;
  userId: number;
};
export type UpdateDocumentType =
  | Omit<CreateDocumentType, "templateId">
  | { id: number };

export async function SubmitCreateDocumentFromTemplate(
  data: CreateDocumentType
) {
  const res = await prismadb.document.create({ data: { ...data } });
  return res;
}
export async function SubmitUpdateDocumentFromTemplate(
  data: UpdateDocumentType
) {}
