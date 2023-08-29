import { z } from "zod";

export const ContactInfo = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  emailAddress: z.string().nonempty(),
  phoneNumber: z.string().nonempty(),
  message: z.string().optional(),
});

export type ContactInfo = z.infer<typeof ContactInfo>;