"use server";

import { headers } from "next/headers";

import { contactSchema, fieldErrorsFromZod } from "@/lib/contact-schema";
import type { ContactFormState } from "@/lib/contact-state";
import { sendContactEmail } from "@/lib/email";
import { isRateLimited } from "@/lib/rate-limit";

const SERVER_ERROR = "Something went wrong on our side. Try again, or message us on WhatsApp.";

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    message: String(formData.get("message") ?? ""),
    timeline: String(formData.get("timeline") ?? ""),
  };

  // Honeypot: a real visitor never fills this hidden field.
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "success", message: "Sent! We're on it, and we'll be in touch soon.", values };
  }

  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return { status: "error", message: SERVER_ERROR, values };
  }

  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { status: "error", fieldErrors: fieldErrorsFromZod(parsed.error), values };
  }

  try {
    await sendContactEmail(parsed.data);
  } catch {
    return { status: "error", message: SERVER_ERROR, values };
  }

  return { status: "success", message: "Sent! We're on it, and we'll be in touch soon.", values };
}
