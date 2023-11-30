import { create } from "zustand";
import { Contact } from "../types/Contact";
import localforage from "localforage";

interface ContactStore {
  contacts: Contact[];
  setContacts: (data: Contact[]) => void;
  addContact: (data: Contact) => void;
  updateContact: (data: Contact) => void;
  deleteContact: (id: string) => void;
  getContacts: () => Contact[];
  find: (id: string) => Contact;
}

export const useContactStore = create<ContactStore>((set, get) => ({
  contacts: [],
  setContacts: (data) => {
    set(() => {
      localforage.setItem("contacts", data);
      return { contacts: data };
    });
  },
  addContact: (data) => {
    set((state) => {
      localforage.setItem("contacts", [...state.contacts, data]);
      return {
        contacts: [...state.contacts, data],
      };
    });
  },
  updateContact: async (data) => {
    set((state) => {
      const updated = state.contacts.map((c) => {
        return c.id == data.id ? { avatar: c.avatar, ...data } : c;
      });
      localforage.setItem("contacts", updated);
      return {
        contacts: updated,
      };
    });
  },
  deleteContact: (id) => {
    set((state) => {
      const withoutRemoved = state.contacts.filter((c) => c.id !== id);
      localforage.setItem("contacts", withoutRemoved);
      return {
        contacts: [...withoutRemoved],
      };
    });
  },
  find: (id) => {
    return get().contacts.filter((c) => c.id == id)[0];
  },
  getContacts: () => {
    return get().contacts;
  },
}));
