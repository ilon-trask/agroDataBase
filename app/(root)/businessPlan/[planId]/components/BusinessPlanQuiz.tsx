"use client";
import Div from "@/components/ui/Div";
import MyButton from "@/components/ui/MyButton";
import MyText from "@/components/ui/MyText";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
function Buttons({
  screen,
  setScreen,
  router,
}: {
  setScreen: Dispatch<SetStateAction<number>>;
  screen: number;
  router: AppRouterInstance;
}) {
  return (
    <Div display={"flex"}>
      {screen > 0 ? (
        <MyButton onClick={() => setScreen((prev) => prev - 1)}>Назад</MyButton>
      ) : (
        <></>
      )}
      {screen < 6 ? (
        <MyButton
          ml={"auto"}
          mr={0}
          onClick={() => setScreen((prev) => prev + 1)}
        >
          Далі
        </MyButton>
      ) : (
        <MyButton ml={"auto"} mr={0} onClick={() => router.back()}>
          Зберегти
        </MyButton>
      )}
    </Div>
  );
}
const TabHeading = ({ children }: { children: any }) => (
  <MyText fontSize={"20px"} fontWeight={"medium"}>
    {children}
  </MyText>
);
export default function BusinessPlanQuiz() {
  const [screen, setScreen] = useState(0);
  const router = useRouter();
  return (
    <Tabs variant="soft-rounded" index={screen}>
      <TabList>
        <Tab display={"block"}>
          <TabHeading>Загальні дані</TabHeading>
          <MyText>Титульний лист</MyText>
          <MyText>Зміст</MyText>
          <MyText>Резуме</MyText>
        </Tab>
        <Tab display={"block"}>
          <TabHeading>Маркетинг</TabHeading>
          <MyText>Ринок</MyText>
          <MyText>Продукт</MyText>
          <MyText>Конкуренти</MyText>
        </Tab>
        <Tab display={"block"}>
          <TabHeading>Виробництво</TabHeading>
          <MyText>Технології</MyText>
          <MyText>Ресурси</MyText>
          <MyText>Собівартість</MyText>
        </Tab>
        <Tab display={"block"}>
          <TabHeading>Підприємство</TabHeading>
          <MyText>ОПФ</MyText>
          <MyText>Керівництво</MyText>
          <MyText>Кадри</MyText>
        </Tab>
        <Tab display={"block"}>
          <TabHeading>Фінанси</TabHeading>
          <MyText>Доходи</MyText>
          <MyText>Витрати</MyText>
          <MyText>Показники</MyText>
        </Tab>
        <Tab display={"block"}>
          <TabHeading>Ризики</TabHeading>
          <MyText>Оцінка</MyText>
          <MyText>Аналіз</MyText>
          <MyText>Заходи</MyText>
        </Tab>
        <Tab display={"block"}>
          <TabHeading>Додатки</TabHeading>
          <MyText>Копії</MyText>
          <MyText>Таблиці</MyText>
          <MyText>Діаграми</MyText>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Buttons screen={screen} setScreen={setScreen} router={router} />
        </TabPanel>
        <TabPanel>
          <Buttons screen={screen} setScreen={setScreen} router={router} />
        </TabPanel>
        <TabPanel>
          <Buttons screen={screen} setScreen={setScreen} router={router} />
        </TabPanel>
        <TabPanel>
          <Buttons screen={screen} setScreen={setScreen} router={router} />
        </TabPanel>
        <TabPanel>
          <Buttons screen={screen} setScreen={setScreen} router={router} />
        </TabPanel>
        <TabPanel>
          <Buttons screen={screen} setScreen={setScreen} router={router} />
        </TabPanel>
        <TabPanel>
          <Buttons screen={screen} setScreen={setScreen} router={router} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
