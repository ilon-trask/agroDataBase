import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";

import { create } from "zustand";
interface useFarmsData {
  farms: POUWithSpecialization[] | [];
  setFarms: (farms: POUWithSpecialization[]) => void;
  setNewFarms: (farm: POUWithSpecialization) => void;
  updateFarm: (farm: POUWithSpecialization) => void;
}

export const useFarmsData = create<useFarmsData>((set) => ({
  farms: [],
  setFarms: (farms) => set({ farms: farms }),
  setNewFarms: (farm) =>
    set((state) => ({
      farms: [...state.farms, farm].sort(
        //@ts-ignore
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      ),
    })),
  updateFarm: (farm) =>
    set((state) => ({
      farms: [...state.farms.filter((el) => el.id != farm.id), farm].sort(
        //@ts-ignore
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      ),
    })),
}));
