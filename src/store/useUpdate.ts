import { create } from "zustand";

type props = {
  update: boolean,
  toggleUpdate: () => void,
}

export const useUpdate = create<props>((set) => ({
  update: false,
  toggleUpdate: () => set((state) => ({ update: !state.update })),
}))
