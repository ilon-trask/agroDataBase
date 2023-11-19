import MyContainer from "@/components/ui/MyContainer";
import MyText from "@/components/ui/MyText";
import React from "react";

export default function Home() {
  return (
    <MyContainer textAlign={"center"}>
      <MyText fontWeight={"bold"} fontSize={"30px"}>
        Тренери-фермери
      </MyText>
      навчають інших фермерів широкому спектру практик, що стосуються
      тваринництва, сільськогосподарських культур, агролісомеліорації та
      рибальства. Ролі та обов'язки тренерів-фермерів різняться, але найчастіше
      включають навчання, моніторинг / подальші дії, консультування, проведення
      демонстрацій, організацію зустрічей та функціонування зв'язку між
      фермерами та агентами розвитку.
    </MyContainer>
  );
}
