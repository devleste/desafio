import { create } from "zustand";

type props = {
  updateUser: boolean,
  toggleUpdateUser: () => void,
  id: number | null,
  setId: (id:number) => void
}

export const useUpdateUser = create<props>((set) => ({
  updateUser: false,
  toggleUpdateUser: () => set((state) => ({ updateUser: !state.updateUser })),
  id: null,
  setId: (idvalue) => set((state) => ({id: idvalue})) 
}))