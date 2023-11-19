import { User } from "@prisma/client";
import { create } from "zustand";
interface usePrismaUserData {
  prismaUser: User | null | undefined;
  setPrismaUser: (user: User | null | undefined) => void;
}

export const usePrismaUserData = create<usePrismaUserData>((set) => ({
  prismaUser: "" as any,
  setPrismaUser: (user: User | null | undefined) =>
    set({
      prismaUser: user,
    }),
}));
