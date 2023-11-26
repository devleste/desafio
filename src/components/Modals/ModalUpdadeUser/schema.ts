// ZOD
import { z } from "zod";

export const schema = z.object({
    first_name: z.string().min(4, "O usuário deve ter pelo menos 4 dígitos."),
    last_name: z.string().min(4, "O usuário deve ter pelo menos 4 dígitos."),
    email: z.string().email("Escreva seu email"),
    language: z.string().min(1, "Preencha este campo"),
    gender: z.enum(["F", "M"]),
    avatar: z.string(),
    birthday: z.string().min(1, "Preencha este campo")
});
  
export type schemaProps = z.infer<typeof schema>;
