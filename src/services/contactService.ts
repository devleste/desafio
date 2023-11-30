import localforage from "localforage";
import { contactsAPI } from "../API/contactsAPI";
import { useContactStore } from "../store/contactStore";
import { Contact } from "../types/Contact";
import _ from "lodash";
import dayjs from "dayjs";
const store = useContactStore.getState();

export const contactService = {
  loadContacts: async () => {
    const data = await contactsAPI.fetchAll();
    if (data.error) return null;
    const fromStorage =
      ((await localforage.getItem("contacts")) as Contact[]) ?? [];
    const dedupedContacts = _.unionBy([...fromStorage, ...data], "id");
    store.setContacts(_.sortBy(dedupedContacts, "id", "asc"));
  },

  get: async (id: string) => {
    const contact = store.contacts.filter((c) => c.id === id);
    return contact;
  },

  saveContact: (contact: Contact) => {
    store.addContact(contact);
  },

  updateContact: (contact: Contact) => {
    store.updateContact(contact);
  },

  deleteContact: (id: string) => {
    store.deleteContact(id);
  },

  getLanguages: () => {
    const allLanguages = store.getContacts().map((contact) => contact.language);
    return [...new Set(allLanguages)];
  },

  getFiltered: (params: URLSearchParams) => {
    const contacts = store.getContacts();
    const filters = Object.fromEntries(params);
    if (_.isEmpty(filters)) return contacts;

    const exactFilters = _.pick(filters, ["language", "gender"]);

    const filteredContacts = contacts.filter((contact) => {
      if (
        filters["birthmonth"] &&
        dayjs(contact.birthday).month() != Number(filters["birthmonth"]) - 1
      ) {
        return false;
      }

      for (const key in exactFilters) {
        // @ts-expect-error just some TS key shennanigans
        if (contact[key] && contact[key] == exactFilters[key]) {
          continue;
        }
        return false;
      }
      if (filters["ageFrom"] || filters["ageTo"]) {
        const age = dayjs().year() - dayjs(contact.birthday).year();
        const min = Number(filters["ageFrom"] ?? -1);
        const max = Number(filters["ageTo"] ?? 1000);
        return min <= age && age <= max;
      }
      return true;
    });
    return filteredContacts;
  },
};
