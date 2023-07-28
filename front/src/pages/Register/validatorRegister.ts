import { z } from "zod";

export const schemaRegister = z.object({
  name: z.string().nonempty("Nome Obrigatório"),
  email: z.string().email("Email Obrigatório"),
  password: z.string().nonempty("Senha é Obrigatória"),
  phone: z.string(),
});

export type TRegisterData = z.infer<typeof schemaRegister>;
