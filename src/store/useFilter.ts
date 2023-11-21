import { create } from "zustand";

type props = {
  filter: boolean,
  toggleFilter: () => void
}

export const useFilter = create<props>((set) => ({
  filter: false,
  toggleFilter: () => set((state) => ({ filter: !state.filter }))
}))