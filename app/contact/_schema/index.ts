import { z } from "zod";

export const schemaContact = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is invalid").min(1, "Email is required"),
  messages: z
    .string()
    .min(10, "At least 10 characters")
    .min(1, "Messages is required"),
});

export type SchemaContact = z.infer<typeof schemaContact>