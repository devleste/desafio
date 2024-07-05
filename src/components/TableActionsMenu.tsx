import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DialogEditContact from "./DialogEditContact"

import { useContactStore } from "@/db/storage"
import { useState } from "react"
import { Contact } from "@/types/contacts"
import { Button } from "./ui/button"
import { MoreHorizontal } from "lucide-react"
import DialogProfile from "./DialogProfile"

interface TableActionsMenuProps {
  contact: Contact
}

export default function TableActionsMenuProps({
  contact,
}: TableActionsMenuProps) {
  const { removeContact } = useContactStore()
  const [editForm, setEditForm] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  return (
    <>
      <DialogEditContact
        isOpen={editForm}
        setIsOpen={setEditForm}
        data={contact}
      />

      <DialogProfile
        isOpen={showProfile}
        setIsOpen={setShowProfile}
        data={contact}
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Opções</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() =>
              navigator.clipboard.writeText(
                `${contact.first_name} ${contact.last_name}`
              )
            }
          >
            Copiar nome
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => setShowProfile(true)}>
            Ver perfil
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setEditForm(true)}>
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => removeContact(contact.id)}
            className="text-destructive"
          >
            Remover
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
