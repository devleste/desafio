import { z } from "zod"

export const addContactSchema = z.object({
  first_name: z
    .string()
    .min(2, "Mínimo necessário: 2 letras")
    .regex(/^[A-Za-z]+$/i, "Somente letras"),
  last_name: z
    .string()
    .min(2, "Mínimo necessário: 2 letras")
    .regex(/^[A-Za-z]+$/i, "Somente letras"),
  email: z.string().min(1, "Campo obrigatório").email("Email inválido"),
  gender: z.enum(["M", "F"], {
    required_error: "Campo obrigatório",
  }),
  language: z.string().min(3, "Mínimo necessário: 3 letras"),
  birthday: z
    .string()
    .min(6, "A data precisa seguir o seguinte formato: YYYY-MM-DD"),
  // TODO: Add a regex validation here or add a date picker to the form
})

export type addcontactType = z.infer<typeof addContactSchema>

export type editContactType = {
  email: string
  gender: string
  first_name: string
  last_name: string
  language: string
  birthday: string
  id: number
}
