import { create } from "zustand";

type props = {
  addUser: boolean,
  toggleAddUser: () => void
}

export const useAddUser = create<props>((set) => ({
  addUser: false,
  toggleAddUser: () => set((state) => ({ addUser: !state.addUser }))
}))