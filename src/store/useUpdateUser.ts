import { create } from "zustand";

type props = {
  updateUser: boolean,
  toggleUpdateUser: () => void
}

export const useUpdateUser = create<props>((set) => ({
  updateUser: false,
  toggleUpdateUser: () => set((state) => ({ updateUser: !state.updateUser }))
}))