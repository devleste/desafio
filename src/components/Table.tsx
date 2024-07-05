"use client"

import { useContactStore } from "@/db/storage"

export default function Table() {
  const { contacts, removeContact } = useContactStore()

  return (
    <div className="flex w-full h-full justify-center p-10">
      <ul className="flex flex-col gap-10">
        {contacts.map((contact) => {
          return (
            <li
              key={contact.id}
              className="flex flex-col"
              onClick={() => removeContact(contact.id)}
            >
              <span>{contact.id}</span>
              <span>{`${contact.first_name} ${contact.last_name}`}</span>
              <span>{contact.language}</span>
              <span>{contact.birthday}</span>
              <span>{contact.email}</span>
              <span>{contact.avatar}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
