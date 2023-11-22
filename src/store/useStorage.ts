import { create } from "zustand";
import storageType from "../type/storageType";

type props = {
  storageData: storageType[] | [],
  setStorageData: (data: storageType[]) => void
}

export const useStorage = create<props>((set) => ({
  setStorageData: (data) => set((state) => ({ storageData: data })),
  storageData: []
}))
