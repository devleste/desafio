import { Dispatch, SetStateAction } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Contact } from "@/types/contacts"
import { CalendarDays, Languages, Mail, PersonStanding } from "lucide-react"

interface DialogProfileProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  data: Contact
}

export default function DialogProfile({
  isOpen,
  setIsOpen,
  data,
}: DialogProfileProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-8 ">
        <DialogHeader className="">
          <DialogTitle className="text-2xl">Perfil</DialogTitle>
          <DialogDescription className="hidden">
            Perfil com as informações do contato.
          </DialogDescription>
        </DialogHeader>
        <div className="flex bg-clip-border rounded-xl shadow-md w-full flex-row">
          <div className="flex w-[30%] rounded-xl">
            <img
              src={data.avatar}
              alt="card-image"
              className="object-fit w-full h-full rounded-l-xl"
            />
          </div>
          <div className="flex flex-col p-6">
            <h4 className="block font-sans mb-3 text-2xl text-primary antialiased font-semibold leading-snug tracking-normal">
              {`${data.first_name} ${data.last_name}`}
            </h4>
            <div className="flex items-center gap-1">
              <Mail width={15} />
              <span className="block font-sans text-base antialiased font-normal leading-relaxed ">
                {data.email}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <PersonStanding width={15} />
              <span className="block font-sans text-base antialiased font-normal leading-relaxed ">
                {data.gender === "M" ? "Masculino" : "Feminino"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays width={15} />
              <span className="block font-sans text-base antialiased font-normal leading-relaxed ">
                {data.birthday}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Languages width={15} />
              <span className="block font-sans text-base antialiased font-normal leading-relaxed ">
                {data.language}
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
