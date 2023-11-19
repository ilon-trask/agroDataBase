"use client";
import NavBar from "@/components/ui/NavBar";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect } from "react";
import { User } from "@supabase/auth-helpers-nextjs";
import ModalProvider from "@/providers/modal-provider";
import { User as PrismaUser } from "@prisma/client";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
function Provider({
  children,
  user,
  prismaUser,
}: {
  children: React.ReactNode;
  user: User | null;
  prismaUser: PrismaUser | null;
}) {
  const { setPrismaUser: setUser } = usePrismaUserData();
  useLayoutEffect(() => setUser(prismaUser), [prismaUser]);
  return (
    <CacheProvider>
      <ChakraProvider>
        <NavBar user={user} />

        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}

export default Provider;
