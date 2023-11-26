import { create } from "zustand";

type props = {
  filter: boolean,
  toggleFilter: () => void,
  languageFilter: string,
  setLanguageFilter: (language:string) => void,
  genderFilter: string,
  setGenderFilter: (language:string) => void,
  dateFilter: string,
  setDateFilter: (language:string) => void
}

export const useFilter = create<props>((set) => ({
  filter: false,
  toggleFilter: () => set((state) => ({ filter: !state.filter })),
  languageFilter: "",
  setLanguageFilter: (language) => set(() => ({ languageFilter: language})),
  genderFilter: "",
  setGenderFilter: (gender) => set(() => ({ genderFilter: gender})),
  dateFilter: "",
  setDateFilter: (date) => set(() => ({ dateFilter: date}))
}))