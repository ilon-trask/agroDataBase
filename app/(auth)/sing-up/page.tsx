"use client";
import React from "react";
import { Auth, SignUp } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Box, Text } from "@chakra-ui/react";
import supabase from "@/lib/supabase";
import MyHeading from "@/components/ui/MyHeading";
import MyContainer from "@/components/ui/MyContainer";
import Image from "next/image";
// import lsjdf from "../../../public/sing_up_bg.jpg";
export default function Page() {
  return (
    <Box>
      <Box
        backgroundImage={"/sing_up_bg.jpg"}
        backgroundColor={"rgba(0, 0, 0, 0.5)"}
        backgroundRepeat={"no-repeat"}
        w={"100%"}
        h={"50vh"}
        backgroundSize={"cover"}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <MyHeading color={"white"}>
          Реєстрація дає доступ <br />
          розширеного сортування <br />
          під ваші побажання
        </MyHeading>
        <Box
          w={"300px"}
          bg={"white"}
          p={"10px"}
          h={"90%"}
          my={"10px"}
          borderRadius={"20px"}
          maxH={"fit-content"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box width={"90%"}>
            <SignUp
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={[]}
              redirectTo="/"
              localization={{
                variables: {
                  sign_in: {
                    email_label: "Ваш email",
                    password_label: "Ваш пароль",
                    email_input_placeholder: "Ваш email",
                    password_input_placeholder: "Ваш пароль",
                    button_label: "Увійти",
                    social_provider_text: "Увійти за допомогою",
                    link_text: "Уже маєте аккаунт? Увійти",
                  },
                  sign_up: {
                    email_label: "Ваш email",
                    password_label: "Ваш пароль",
                    email_input_placeholder: "Ваш email",
                    password_input_placeholder: "Ваш пароль",
                    button_label: "Зареєструватись",
                    social_provider_text: "Зареєструватися за допомогою",
                    link_text: "Не маєте аккаунт? Зареєструватись",
                    confirmation_text:
                      "На ваш email прийшов лист підтвердження",
                  },

                  magic_link: {
                    email_input_label: "Ваш email",
                    email_input_placeholder: "Ваш email",
                    button_label: "Відправити email",
                    link_text: "Send a magic link email",
                  },
                  forgotten_password: {
                    email_label: "Ваш email",
                    password_label: "Ваш пароль",
                    email_input_placeholder: "Ваш email",
                    button_label: "Надіслати новий пароль",
                    link_text: "Забули пароль?",
                  },
                  update_password: {
                    password_label: "Ваш новий пароль",
                    password_input_placeholder: "Ваш новий пароль",
                    button_label: "Оновити пароль",
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box bgColor={"#289D4E"}>
        <MyContainer>
          <Text color={"white"}>
            Для реєстрації необхідно: <br />
            1. Написати адресу електронної пошти
            <br />
            2. Придумати і написати пароль
            <br />
            3. Натиснути "зареєструватись" <br />
            4. Перейти на вказану у формі електронну пошту
            <br />
            5. Відкрити лист і перейти запосиланням
            <br />
          </Text>
        </MyContainer>
      </Box>
      <MyContainer>
        <Box display="flex" justifyContent={"space-between"} mt={"100px"}>
          <Image
            src={"/sing_up_content.png"}
            alt="контент"
            width={500}
            height={500}
          />
          <Box>
            <MyHeading mt={"30px"}>Доступ до Інформації 24/7</MyHeading>
            <Text mt={4}>
              Веб портал "Демоферма" забезпечує зареєстрованим користувачам
              онлайн доступ до інформації опублікованої на порталі в будь-який
              час із будь якого пристрою підключиного до мережі інтернет
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent={"space-between"} mt={"100px"}>
          <Box>
            <MyHeading mt={"30px"}>Сортування під ваші побажання</MyHeading>
            <Text mt={4}>
              Веб портал дає можливість швидко та зручно відсортовувати
              інформацію за побажаннями користувача
            </Text>
          </Box>
          <Image
            src={"/sing_up_content_2.png"}
            alt="контент"
            width={500}
            height={500}
          />
        </Box>
        <Box display="flex" justifyContent={"space-between"} mt={"100px"}>
          <Image
            src={"/sing_up_content.png"}
            alt="контент"
            width={500}
            height={500}
          />
          <Box>
            <MyHeading mt={"30px"}>
              Можливість коментувати і отримувати консультації
            </MyHeading>
          </Box>
        </Box>
      </MyContainer>
    </Box>
  );
}
