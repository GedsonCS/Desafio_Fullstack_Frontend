import { z } from "zod";

export const schemaUpdateContact = z
  .object({
    contactName: z.string().max(100),
    contactEmail: z.string().email().max(100),
    contactPhone: z.string().max(20),
  })
  .partial();

export type TUpdateContact = z.infer<typeof schemaUpdateContact>;
