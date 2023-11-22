import { create } from "zustand";
import storageType from "../type/storageType";

type props = {
  detail: boolean,
  toggleDetail: () => void,
  userData?: storageType,
  setUser: (user: storageType) => void
}

export const useDetail = create<props>((set) => ({
  detail: false,
  toggleDetail: () => set((state) => ({ detail: !state.detail })),
  setUser: (user) => set(() => ({ userData: user }))
}))