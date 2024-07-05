import { Dispatch, SetStateAction } from "react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Contact } from "@/types/contacts"
import {
  addcontactType,
  addContactSchema,
  editContactType,
} from "@/types/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useContactStore } from "@/db/storage"
import { useMediaQuery } from "@/hooks/useMediaQuery"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer"
import { ScrollArea } from "./ui/scroll-area"

interface DialogEditContactProps {
  data: Contact
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function DialogEditContact({
  data,
  isOpen,
  setIsOpen,
}: DialogEditContactProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addcontactType>({
    resolver: zodResolver(addContactSchema),
  })

  const { editContact } = useContactStore()

  function onSubmit(contact: addcontactType) {
    const newData: editContactType = {
      id: data.id,
      ...contact,
    }

    editContact(newData)
    setIsOpen(false)
  }

  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[427px] overflow-auto max-h-[60%]">
          <DialogHeader>
            <DialogTitle>Editar contato</DialogTitle>
            <DialogDescription>
              Edite as informações deste contato. Salve quando finalizar.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="first_name">Nome</Label>
                <Input
                  id="first_name"
                  {...register("first_name")}
                  defaultValue={data.first_name}
                />
                {errors.first_name && (
                  <span className="text-xs text-destructive">
                    {errors.first_name?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="last_name">Sobrenome</Label>
                <Input
                  id="last_name"
                  {...register("last_name")}
                  defaultValue={data.last_name}
                />
                {errors.last_name && (
                  <span className="text-xs text-destructive">
                    {errors.last_name?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  {...register("email")}
                  defaultValue={data.email}
                />
                {errors.email && (
                  <span className="text-xs text-destructive">
                    {errors.email?.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gênero</Label>
                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    checked={data.gender === "M"}
                    id="male"
                    type="radio"
                    value="M"
                    {...register("gender")}
                    className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="male"
                    className="w-full py-4 ms-2 text-sm font-medium"
                  >
                    Masculino
                  </label>
                </div>
                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    checked={data.gender === "F"}
                    id="female"
                    type="radio"
                    value="F"
                    {...register("gender")}
                    className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="female"
                    className="w-full py-4 ms-2 text-sm font-medium"
                  >
                    Feminino
                  </label>
                </div>
                {errors.gender && (
                  <span className="text-xs text-destructive">
                    {errors.gender?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="language">Idioma</Label>
                <Input
                  id="language"
                  {...register("language")}
                  defaultValue={data.language}
                />
                {errors.language && (
                  <span className="text-xs text-destructive">
                    {errors.language?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="birthday">Data de nascimento</Label>
                <Input
                  id="birthday"
                  {...register("birthday")}
                  defaultValue={data.birthday}
                />
                {errors.birthday && (
                  <span className="text-xs text-destructive">
                    {errors.birthday?.message}
                  </span>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="p-6 max-h-[80%]">
        <ScrollArea className="overflow-auto">
          <DrawerHeader className="">
            <DrawerTitle>Acidionar contato</DrawerTitle>
            <DrawerDescription>
              Insira os dados baixo para adicionar um novo contato à sua lista.
            </DrawerDescription>
          </DrawerHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4 px-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="first_name">Nome</Label>
                <Input
                  id="first_name"
                  {...register("first_name")}
                  defaultValue={data.first_name}
                />
                {errors.first_name && (
                  <span className="text-xs text-destructive">
                    {errors.first_name?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="last_name">Sobrenome</Label>
                <Input
                  id="last_name"
                  {...register("last_name")}
                  defaultValue={data.last_name}
                />
                {errors.last_name && (
                  <span className="text-xs text-destructive">
                    {errors.last_name?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  {...register("email")}
                  defaultValue={data.email}
                />
                {errors.email && (
                  <span className="text-xs text-destructive">
                    {errors.email?.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gênero</Label>
                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    checked={data.gender === "M"}
                    id="male"
                    type="radio"
                    value="M"
                    {...register("gender")}
                    className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="male"
                    className="w-full py-4 ms-2 text-sm font-medium"
                  >
                    Masculino
                  </label>
                </div>
                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    checked={data.gender === "F"}
                    id="female"
                    type="radio"
                    value="F"
                    {...register("gender")}
                    className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="female"
                    className="w-full py-4 ms-2 text-sm font-medium"
                  >
                    Feminino
                  </label>
                </div>
                {errors.gender && (
                  <span className="text-xs text-destructive">
                    {errors.gender?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="language">Idioma</Label>
                <Input
                  id="language"
                  {...register("language")}
                  defaultValue={data.language}
                />
                {errors.language && (
                  <span className="text-xs text-destructive">
                    {errors.language?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="birthday">Data de nascimento</Label>
                <Input
                  id="birthday"
                  {...register("birthday")}
                  defaultValue={data.birthday}
                />
                {errors.birthday && (
                  <span className="text-xs text-destructive">
                    {errors.birthday?.message}
                  </span>
                )}
              </div>
            </div>
            <DrawerFooter>
              <Button>Salvar</Button>
              <DrawerClose asChild>
                <Button variant="outline" className="w-full">
                  Cancelar
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}
