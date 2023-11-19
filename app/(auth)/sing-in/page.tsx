"use client";
import React, { useState } from "react";
import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import supabase from "@/lib/supabase";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ErrorText from "@/components/ui/ErrorText";
import { useUserData } from "@/hooks/use_userData";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import getPrismaUser from "./getPrismaUser";
export default function Page() {
  const schema = z.object({
    email: z
      .string()
      .nonempty("email не може бути пустим")
      .email("форманування не відповідає email"),
    password: z
      .string()
      .nonempty("пароль не може бути пустим")
      .min(8, "мінімальна довжина 8 "),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const [err, setErr] = useState("");
  const { setUser } = useUserData();
  const { setPrismaUser } = usePrismaUserData();
  const onSubmit = async (res: { email: string; password: string }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: res.email,
      password: res.password,
    });
    const prismaUser = await getPrismaUser(data.user?.id!);
    setPrismaUser(prismaUser);
    if (!error) {
      await supabase.auth.getSession();
      router.push("/");
      setUser(data.user);
      //   location.reload();
    }
    if (error) setErr(error.message);
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      minH={"90vh"}
    >
      <Box w={"300px"}>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel
              mr={0}
              fontSize={"14px"}
              color={"gray"}
              fontFamily={"sans-serif"}
              mb={"16px"}
            >
              Ваш email
              <Input
                placeholder="Ваш email"
                mt={"8px"}
                fontWeight={"light"}
                fontSize={"14px"}
                color={"gray"}
                autoComplete="email"
                {...register("email", { required: true })}
              />
              {errors ? (
                <ErrorText>{errors["email"]?.message}</ErrorText>
              ) : null}
            </FormLabel>
            <FormLabel
              mr={0}
              fontSize={"14px"}
              color={"gray"}
              fontFamily={"sans-serif"}
              mb={"16px"}
            >
              Ваш пароль
              <Input
                placeholder="Ваш пароль"
                mt={"8px"}
                fontWeight={"light"}
                fontSize={"14px"}
                color={"gray"}
                type="password"
                autoComplete="password"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "мінімальна довжина 8",
                  },
                })}
              />
              {errors ? (
                <ErrorText>{errors["password"]?.message}</ErrorText>
              ) : null}
            </FormLabel>
            {err ? <ErrorText textAlign={"center"}>{err}</ErrorText> : null}
            <Button
              type="submit"
              bgColor={"#3fcf8e"}
              color={"white"}
              w={"100%"}
              fontWeight={"normal"}
              fontSize={"14px"}
            >
              Увійти
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
