import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().nonempty("Esse campo não pode ser vázio"),
  email: z
    .string()
    .nonempty("Esse campo não pode ser vázio")
    .email("Por favor digite um endereço de e-mail correto"),
  phone: z.string().nonempty("Esse campo não pode ser vázio"),
  message: z.string().nonempty("Esse campo não pode ser vázio"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
