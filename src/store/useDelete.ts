import { create } from "zustand";

type props = {
  delete: boolean,
  toggleDelete: () => void
}

export const useDelete = create<props>((set) => ({
  delete: false,
  toggleDelete: () => set((state) => ({ delete: !state.delete }))
}))