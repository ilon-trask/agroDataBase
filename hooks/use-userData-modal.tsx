import { create } from "zustand";
interface useStoreModalUserData {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useUserDataModal = create<useStoreModalUserData>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => {
    set({ isOpen: false });
    console.log("close");
  },
}));
