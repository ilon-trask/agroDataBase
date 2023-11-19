"use server";

import prismadb from "@/lib/prismadb";

export default function getSpecialization() {
  const res = prismadb.specialization.findMany();
  return res;
}
