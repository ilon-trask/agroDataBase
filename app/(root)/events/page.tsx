import MyContainer from "@/components/ui/MyContainer";
import MyHeading from "@/components/ui/MyHeading";
import React from "react";
import Content from "./Content";
import getEventsPublic from "@/hooks/getEventsPublic";

async function Events() {
  const events = await getEventsPublic();
  return (
    <MyContainer>
      <MyHeading>Заходи</MyHeading>
      <Content events={events}></Content>
    </MyContainer>
  );
}

export default Events;
