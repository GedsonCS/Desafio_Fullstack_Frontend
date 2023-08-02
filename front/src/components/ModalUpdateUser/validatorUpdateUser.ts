import { z } from "zod";

export const schemaUpdateUser = z
  .object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string(),
  })
  .partial();

export type TUptadeUser = z.infer<typeof schemaUpdateUser>;
