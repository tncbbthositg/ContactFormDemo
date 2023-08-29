import { z } from "zod";

export const ContactInfo = z.object({
  firstName: z.string().nonempty("Please enter your first name"),
  lastName: z.string().nonempty("Please enter your last name"),
  emailAddress: z.string()
    .nonempty("Please enter a contact email address")
    .email("Please enter a valid email address"),
  phoneNumber: z.string().nonempty("Please enter a contact phone number"),
  message: z.string().optional(),
});

export type ContactInfo = z.infer<typeof ContactInfo>;