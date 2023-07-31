import { z } from "zod";

export const schemaRegisterContact = z.object({
  contactName: z.string().max(100),
  contactEmail: z.string().email().max(100),
  contactPhone: z.string().max(20),
  createdAt: z.date(),
});

export type TRegisterData = z.infer<typeof schemaRegisterContact>;
