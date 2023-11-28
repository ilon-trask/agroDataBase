import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import prismadb from "@/lib/prismadb";
import React from "react";
import { useRouter } from "next/router";
import EventContent from "./EventContent";

async function page({ params: { eventId } }: { params: { eventId: number } }) {
  const event = await prismadb.event.findFirst({
    where: { id: +eventId },
    include: { user: true },
  });

  return (
    <MyContainer>
      <EventContent />
      {eventId}
    </MyContainer>
  );
}

export default page;
