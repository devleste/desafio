import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

import { useContactStore } from "@/db/storage"
import { Contact } from "@/types/contacts"
import { Column } from "@tanstack/react-table"

interface SelectLanguageProps {
  column: Column<Contact, unknown>
}

export default function SelectLanguage({ column }: SelectLanguageProps) {
  const { contacts } = useContactStore()

  return (
    <Select
      onValueChange={(value) =>
        value === "N" ? column.setFilterValue("") : column.setFilterValue(value)
      }
    >
      <SelectTrigger className="">
        <SelectValue placeholder="Idioma" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="N">Todos</SelectItem>
        {contacts.map((contact) => {
          return (
            <SelectItem value={contact.language} key={contact.id}>
              {contact.language}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
