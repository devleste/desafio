import { Contact, Contacts } from "@/types/contacts"
import { addcontactType, editContactType } from "@/types/schemas"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ContactState {
  loaded: boolean
  contacts: Contacts
  setLoaded: (bool: boolean) => void
  initializeStore: (data: Contacts) => void
  addContact: (contact: addcontactType) => void
  editContact: (contact: editContactType) => void
  removeContact: (id: Number) => void
}

export const useContactStore = create<ContactState>()(
  persist(
    (set) => ({
      loaded: false,
      contacts: [],
      setLoaded: (bool: boolean) => {
        set(() => ({ loaded: bool }))
      },
      initializeStore: (data) => {
        set(() => ({ contacts: data }))
      },
      addContact: (contact) =>
        set((state) => ({
          contacts: [
            ...state.contacts,
            {
              avatar:
                "https://robohash.org/dolorescommodiautem.bmp?size=100x100&set=set1",
              id: state.contacts[state.contacts.length - 1].id + 1,
              ...contact,
            },
          ],
        })),
      editContact: (contact) =>
        set((state) => ({
          contacts: state.contacts.map((obj) =>
            obj.id === contact.id ? { ...obj, ...contact } : obj
          ),
        })),
      removeContact: (id: Number) => {
        set((state) => ({
          contacts: state.contacts.filter((contact) => contact.id !== id),
        }))
      },
    }),
    {
      name: "contacts",
    }
  )
)
