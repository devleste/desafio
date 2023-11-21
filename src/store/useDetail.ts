import { create } from "zustand";

type IUser = {
    id:	number,
    first_name:	string,
    last_name:	string,
    email:	string,
    gender:	string,
    language:	string,
    avatar:	string,
    birthday:	string,
}

type props = {
  detail: boolean,
  toggleDetail: () => void,
  userData?: IUser,
  setUser: (user: IUser) => void
}

export const useDetail = create<props>((set) => ({
  detail: false,
  toggleDetail: () => set((state) => ({ detail: !state.detail })),
  setUser: (user) => set(() => ({ userData: user }))
}))