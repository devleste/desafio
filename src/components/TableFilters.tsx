import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Button } from "./ui/button"
import { SlidersHorizontal } from "lucide-react"
import SelectGender from "./SelectGender"
import SelectLanguage from "./SelectLanguage"
import { Column } from "@tanstack/react-table"
import { Contact } from "@/types/contacts"

interface TableFiltersProps {
  data: Column<Contact, unknown> | undefined
}

export default function TableFilters({ data }: TableFiltersProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  // How can i access the Column<TData, unknown> type came from props?

  if (isDesktop) {
    return (
      <div className="flex gap-5">
        {/* <SelectGender data={data} />
        <SelectLanguage column={data ?? data} /> */}
      </div>
    )
  }

  return (
    <div className="flex gap-5">
      <Button variant={"secondary"}>
        <SlidersHorizontal width={16} />
      </Button>
    </div>
  )
}
