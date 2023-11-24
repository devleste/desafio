import { create } from "zustand";

type props = {
  flashMessageModal: boolean,
  setFlashMessageModal: (value: boolean) => void,
  message: string,
  setMessage: (value: string) => void,
}

export const useFlashMessage = create<props>((set) => ({
  flashMessageModal: false,
  setFlashMessageModal: (value) => set(() => ({ flashMessageModal: value })),
  message: '',
  setMessage: (value) => set(() => ({ message: value })),
}))
