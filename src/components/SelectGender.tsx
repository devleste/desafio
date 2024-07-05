import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

import { Contact } from "@/types/contacts"
import { Column } from "@tanstack/react-table"

interface SelectGenderProps {
  data: Column<Contact, unknown> | undefined
}

export default function SelectGender({ data }: SelectGenderProps) {
  return (
    <Select
      onValueChange={(value) =>
        value === "N" ? data?.setFilterValue("") : data?.setFilterValue(value)
      }
    >
      <SelectTrigger className="">
        <SelectValue placeholder="Gênero" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="N">Limpar</SelectItem>
        <SelectItem value="M">Masculino</SelectItem>
        <SelectItem value="F">Feminino</SelectItem>
      </SelectContent>
    </Select>
  )
}
