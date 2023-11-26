// ZOD
import { z } from "zod";

export const schema = z.object({
    name: z.string().min(4, "User must have at least 4 digits."),
    email: z.string().email("Fill in a valid email"),
    message: z.string().min(10, "The message field cannot be less than 10 characters long")
});
  
export type schemaProps = z.infer<typeof schema>;
