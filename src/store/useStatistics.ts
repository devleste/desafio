import { create } from "zustand";

type props = {
  statistics: boolean,
  toggleStatistics: () => void
}

export const useStatistics = create<props>((set) => ({
  statistics: false,
  toggleStatistics: () => set((state) => ({ statistics: !state.statistics }))
}))