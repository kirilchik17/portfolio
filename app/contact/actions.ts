"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(200),
  email: z.email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Please write at least 10 characters.").max(5000),
});

export type ContactField = keyof z.infer<typeof contactSchema>;
export type ContactValues = Record<ContactField, string>;

export type ContactState =
  | { status: "idle" }
  | { status: "invalid"; values: ContactValues; errors: Partial<Record<ContactField, string[]>> }
  | { status: "not-configured"; values: ContactValues };

export async function sendContactMessage(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const values: ContactValues = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { status: "invalid", values, errors: z.flattenError(parsed.error).fieldErrors };
  }
  // No email provider is wired yet. Sending lands in a later change.
  return { status: "not-configured", values };
}
