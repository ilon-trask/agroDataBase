"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { User } from "@supabase/auth-helpers-nextjs";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useUserData } from "@/hooks/use_userData";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import UserDataModal from "../modals/UserDataModal/UserDataModal";
import { useUserDataModal } from "@/hooks/use-userData-modal";
import Image from "next/image";
import MyHeading from "./MyHeading";
import Div from "./Div";
import MyText from "./MyText";
import MyContainer from "./MyContainer";

function NavBar({ user }: { user: User | null }) {
  const [userState, setUserState] = useState(user);
  const { onOpen } = useUserDataModal();
  const router = useRouter();
  const { user: userData, setUser } = useUserData();
  const { prismaUser } = usePrismaUserData();
  useLayoutEffect(() => {
    console.log("test");
    console.log(userState);
  }, []);
  if (!prismaUser) console.log("не получилось");
  console.log(prismaUser);
  useEffect(() => setUser(user), []);
  useEffect(() => setUserState(userData), [userData]);

  return (
    <MyContainer
      justifyContent={"space-between"}
      alignItems={"center"}
      p={3}
      display={"flex"}
    >
      <UserDataModal />
      <Div cursor={"pointer"}>
        <Image
          onClick={() => {
            router.push("/");
          }}
          src={"/logo.png"}
          alt="лого"
          width={100}
          height={50}
        />
      </Div>

      <Flex gap={"20px"}>
        <MyText
          cursor={"pointer"}
          onClick={() => {
            router.push("/");
          }}
        >
          Головна
        </MyText>
        <MyText
          cursor={"pointer"}
          onClick={() => {
            router.push("/events");
          }}
        >
          Заходи
        </MyText>
        <MyText
          cursor={"pointer"}
          onClick={() => {
            router.push("/projects");
          }}
        >
          Проекти
        </MyText>
        <MyText
          cursor={"pointer"}
          onClick={() => {
            // router.push("/projects");
          }}
        >
          Спільнота
        </MyText>
      </Flex>
      {userState ? (
        <Box>
          {/* <Icon viewBox="40">
            <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
          </Icon> */}
          <Button
            mr={3}
            onClick={() => {
              if (prismaUser) {
                router.push("/cabinet");
              } else {
                onOpen();
              }
            }}
          >
            Кабінет
          </Button>
          <Button
            onClick={async () => {
              await supabase.auth.signOut();
              router.push("/");
              setUser(null);
            }}
          >
            Вийти
          </Button>
        </Box>
      ) : (
        <Box>
          <Button
            size={"md"}
            mr={3}
            onClick={() => {
              router.push("/sing-in");
            }}
          >
            Увійти
          </Button>
          <Button
            size={"md"}
            onClick={() => {
              router.push("/sing-up");
            }}
          >
            Зареєструватись
          </Button>
        </Box>
      )}
    </MyContainer>
  );
}

export default NavBar;
