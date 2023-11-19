"use client";
import Div from "@/components/ui/Div";
import MyContainer from "@/components/ui/MyContainer";
import MyText from "@/components/ui/MyText";
import Image from "next/image";
import React from "react";
import style from "./farmInf.module.css";
export default function Home() {
  return (
    <MyContainer textAlign={"center"}>
      <MyText fontWeight={"bold"} fontSize={"30px"}>
        Демонстраційна ферма
      </MyText>
      - це суб’єкт підприємницької діяльності, що використовується як інструмент
      демонстрації ідей, новітніх продуктів, техніки, технологій, менеджменту,
      маркетингу у сфері сільського господарства.
      <Div>
        <Div
          // display={"flex"}
          display={"grid"}
          gridTemplateColumns={"1fr 1fr 1fr 1fr"}
          // justifyContent={"space-between"}
          mt={"50px"}
          // gap={"2px"}
        >
          {/* <Div position={"relative"} top={0} left={0} className={style.card}> */}
          <Div className={style.card} position={"relative"}>
            <Div
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              className={style.front}
            >
              <MyText
                textTransform={"uppercase"}
                fontSize={"20px"}
                color={"#548135"}
              >
                Читати літературу
              </MyText>
              <Div
                bgColor={"#289D4E"}
                w={150}
                h={150}
                borderRadius={100}
                display={"flex"}
                justifyContent={"center"}
              >
                <Image
                  src={"/book_icon.svg"}
                  alt="іконка книжки"
                  width={80}
                  height={80}
                />
              </Div>
            </Div>
            <Div className={style.back}>
              <MyText>Підручники</MyText>
              <MyText>Статі</MyText>
              <MyText>Реферати</MyText>
            </Div>
          </Div>
          <Div position={"relative"} className={style.card}>
            <Div
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              className={style.front}
            >
              <MyText
                textTransform={"uppercase"}
                fontSize={"20px"}
                color={"#548135"}
              >
                Дивитись відео
              </MyText>
              <Div
                bgColor={"#289D4E"}
                w={150}
                h={150}
                borderRadius={100}
                display={"flex"}
                justifyContent={"center"}
              >
                <Image
                  src={"/youtube_icon.svg"}
                  alt="іконка відео"
                  width={80}
                  height={80}
                />
              </Div>
            </Div>
            <Div className={style.back}>
              <MyText>Презентації</MyText>
              <MyText>Демонстрації</MyText>
              <MyText>Майстер-клас</MyText>
            </Div>
          </Div>
          <Div position={"relative"} className={style.card}>
            <Div
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              className={style.front}
            >
              <MyText
                textTransform={"uppercase"}
                fontSize={"20px"}
                color={"#548135"}
              >
                Обрати тренера
              </MyText>
              <Div
                bgColor={"#289D4E"}
                w={150}
                h={150}
                borderRadius={100}
                display={"flex"}
                justifyContent={"center"}
              >
                <Image
                  src={"/profile_icon.svg"}
                  alt="іконка профіля"
                  width={80}
                  height={80}
                />
              </Div>
            </Div>
            <Div className={style.back}>
              <MyText>Тренери</MyText>
              <MyText>Експерти</MyText>
              <MyText>Дорадники</MyText>
            </Div>
          </Div>
          <Div position={"relative"} className={style.card}>
            <Div
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              className={style.front}
            >
              <MyText
                textTransform={"uppercase"}
                fontSize={"20px"}
                color={"#548135"}
              >
                Отримати компетенції
              </MyText>
              <Div
                bgColor={"#289D4E"}
                w={150}
                h={150}
                borderRadius={100}
                display={"flex"}
                justifyContent={"center"}
              >
                <Image
                  src={"/adaptation_icon.svg"}
                  alt="іконка компенетції"
                  width={80}
                  height={80}
                />
              </Div>
            </Div>
            <Div className={style.back}>
              <MyText>Спецалізації</MyText>
              <MyText>Навики</MyText>
              <MyText>Уміння</MyText>
            </Div>
          </Div>
        </Div>
      </Div>
    </MyContainer>
  );
}
