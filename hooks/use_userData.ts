import { User } from "@supabase/auth-helpers-nextjs";
import { create } from "zustand";
interface useUserData {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserData = create<useUserData>((set) => ({
  user: null,
  setUser: (user: User | null) =>
    set({
      user,
    }),
}));
