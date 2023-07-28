import { z } from "zod";

export const schemaLogin = z.object({
  email: z.string().email("Email Obrigatório"),
  password: z.string().nonempty("Senha é Obrigatória"),
});

export type TLoginData = z.infer<typeof schemaLogin>;
