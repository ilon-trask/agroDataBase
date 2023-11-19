"use server";
import prismadb from "@/lib/prismadb";

export default async function getRegions() {
  const regions = await prismadb.region.findMany();
  const collator = new Intl.Collator(undefined, { sensitivity: "base" });
  return regions.sort((a, b) => collator.compare(a.name, b.name));
}
