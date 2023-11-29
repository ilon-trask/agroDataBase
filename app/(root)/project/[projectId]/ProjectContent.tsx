"use client";
import Div from "@/components/ui/Div";
import MyHeading from "@/components/ui/MyHeading";
import MyText from "@/components/ui/MyText";

import { Button, Flex, Grid, Input, Select, Textarea } from "@chakra-ui/react";
import { Project } from "@prisma/client";
import React from "react";
import photo from "../../../../public/photo123.png";
import Image from "next/image";

function ProjectContent({ project }: { project: Project | null }) {
  console.log("sdf");
  console.log(project?.photoId);
  return (
    <Div>
      <Div display={"grid"} gridTemplateColumns={"1fr 1fr"} columnGap={"40px"}>
        <Div width={"100%"}>
          {project?.photoId || true ? (
            <Image
              src={photo}
              alt="фото проекту"
              layout="responsive"
              objectFit="contain"
            />
          ) : (
            <Div bgColor={"gray.200"} height={"100%"}></Div>
          )}
          <Button>Змінити фото</Button>
        </Div>

        <Div height={"fit-content"}>
          <MyHeading textAlign={"left"}>Назва </MyHeading>
          <MyText>{project?.name}</MyText>
          <MyHeading textAlign={"left"}>Мета </MyHeading>
          <MyText>{project?.goal}</MyText>
          <Flex justifyContent={"center"}>
            <Button>Долучитись</Button>
          </Flex>
        </Div>
      </Div>
      <Grid templateColumns={"5fr 1fr"} mt={"40px"}>
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Реєстраційний номер проекту (програми), визначений партнером з
          розвитку:
        </MyHeading>

        <Input type="number"></Input>
      </Grid>
      <Div
        display={"grid"}
        gridTemplateColumns={"1fr 1fr"}
        columnGap={"40px"}
        mt={"40px"}
      >
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Партнер з розвитку(донор):
        </MyHeading>
        <Button>Вибрати країну</Button>
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Підрозділ донора:
        </MyHeading>
        <Button>Вибрати ПОУ</Button>
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Виконавець:
        </MyHeading>
        <Button>Вибрати ПОУ</Button>
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Реципієнт:
        </MyHeading>
        <Button>Вибрати ПОУ</Button>
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Бенефіціар:
        </MyHeading>
        <Button>Вибрати ПОУ</Button>
      </Div>
      <Grid templateColumns={"1fr 1fr"} columnGap={"40px"} mt={"40px"}>
        <Div>
          <MyHeading textAlign={"left"} fontSize={"32px"}>
            Цілі проекту
          </MyHeading>
          <Textarea></Textarea>
        </Div>
        <Div>
          <MyHeading textAlign={"left"} fontSize={"32px"}>
            Зміст проекту
          </MyHeading>
          <Textarea></Textarea>
        </Div>
      </Grid>
      <Div mt={"40px"}>
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Найменування стратегічного завдання:
        </MyHeading>
        <Textarea></Textarea>
      </Div>
      <Grid
        templateColumns={"2fr 1fr 1fr"}
        columnGap={"40px"}
        alignItems={"center"}
        mt={"40px"}
      >
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Кошторисна вартість
        </MyHeading>
        <Input placeholder="300"></Input>
        <Select></Select>
      </Grid>
      <Grid
        templateColumns={"2fr 1fr 1fr"}
        columnGap={"40px"}
        alignItems={"center"}
        mt={"40px"}
      >
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Строк реалізації
        </MyHeading>
        <label>
          Дата початку
          <Input type="date"></Input>
        </label>
        <label>
          Дата кінця
          <Input type="date"></Input>
        </label>
      </Grid>
      <Div mt={"40px"}>
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Етапи реалізації:
        </MyHeading>
        <Input />
        <Button>Додати</Button>
      </Div>
      <Grid
        templateColumns={"2fr 1fr 1fr"}
        columnGap={"40px"}
        alignItems={"center"}
        mt={"40px"}
      >
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Міжнародний договір:
        </MyHeading>
        <label>
          Номер
          <Input type="number" />
        </label>
        <label>
          Дата
          <Input type="date" />
        </label>
      </Grid>
      <Div mt={"40px"}>
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Інші відомості, що стосуються проекту (програми)
        </MyHeading>
        <Textarea></Textarea>
      </Div>
      <Grid templateColumns={"1fr 1fr"} mt={"40px"}>
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          Державна реєстрація від{" "}
        </MyHeading>
        <Input type="date"></Input>
      </Grid>
      <Flex justifyContent={"space-between"} mt={"40px"}>
        <MyHeading textAlign={"left"} fontSize={"32px"}>
          <MyHeading as="span" fontSize={"32px"} textTransform={"uppercase"}>
            План закупівлі
          </MyHeading>{" "}
          товарів, робіт і послуг, що придбаваються за кошти міжнародної
          технічної допомоги{" "}
        </MyHeading>
        <Button>Переглянути</Button>
      </Flex>
      <Div mt={"90px"}>
        <MyHeading>Дані для сортування</MyHeading>
        <Flex justifyContent={"space-between"}>
          <MyHeading fontSize={"32px"} textAlign={"left"}>
            Територія
          </MyHeading>
          <Div></Div>
          <Button>Додати область</Button>
        </Flex>
      </Div>
      <Div mt={"90px"}>
        <MyHeading>Варіанти підтримки</MyHeading>
        <Textarea></Textarea>
      </Div>
    </Div>
  );
}

export default ProjectContent;
