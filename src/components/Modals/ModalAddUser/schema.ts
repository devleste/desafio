// ZOD
import { z } from "zod";

export const schema = z.object({
    first_name: z.string().min(4, "User must have at least 4 digits."),
    last_name: z.string().min(4, "User must have at least 4 digits."),
    email: z.string().email("Fill in a valid email"),
    language: z.string().min(1, "Required field!"),
    gender: z.enum(["F", "M"]),
    avatar: z.string(),
    birthday: z.string().min(1, "Required field!")
});
  
export type schemaProps = z.infer<typeof schema>;
