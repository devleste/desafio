import { useContactStore } from "../store/contactStore";

const store = useContactStore.getState();

export const insightService = {
  byGender: () => {
    const data: Record<string, number> = {};
    store.getContacts().forEach((c) => {
      data[c.gender] = data[c.gender] ? data[c.gender] + 1 : 1;
    });
    return Object.keys(data).map((k) => {
      return { gender: k, count: data[k] };
    });
  },
  byLanguage: () => {
    const count: Record<string, number> = {};
    store.getContacts().forEach((c) => {
      count[c.language] = count[c.language] ? count[c.language] + 1 : 1;
    });
    return Object.keys(count).map((k) => {
      return { language: k, count: count[k] };
    });
  },
};
