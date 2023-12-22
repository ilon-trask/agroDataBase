import MyContainer from "@/components/ui/MyContainer";
import React from "react";
import TemplatesContent from "./TemplatesContent";
import MyHeading from "@/components/ui/MyHeading";
import prismadb from "@/lib/prismadb";
import createServerClient from "@/lib/createServerClient";

async function page() {
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("немає аккаунту");
  const prismaUser = await prismadb.user.findFirst({
    where: { sub: user.id },
  });

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
