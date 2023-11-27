import { EventWithUser } from "@/types/DemonstrationActivitiesTypes";

import { create } from "zustand";
interface useActivitiesData {
  activities: EventWithUser[] | [];
  setActivities: (activities: EventWithUser[]) => void;
  setNewActivities: (activity: EventWithUser) => void;
}

export const useActivitiesData = create<useActivitiesData>((set) => ({
  activities: [],
  setActivities: (activities) => set({ activities: activities }),
  setNewActivities: (activity) =>
    set((state) => ({
      activities: [...state.activities, activity].sort(
        //@ts-ignore
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      ),
    })),
}));
