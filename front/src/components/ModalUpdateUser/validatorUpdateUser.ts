import { z } from "zod";

export const schemaUpdateUser = z
  .object({
    name: z.string().nonempty(),
    email: z.string().email(),
    password: z.string().nonempty(),
    phone: z.string(),
  })
  .partial();

export type TUptadeUser = z.infer<typeof schemaUpdateUser>;
