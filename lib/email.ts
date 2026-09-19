import type { ContactFormValues } from "./contact-schema";

export interface EmailProvider {
  send(payload: ContactFormValues): Promise<void>;
}

/**
 * No email provider is configured yet (see section 16 of the brief).
 * This logs the submission instead of sending it, behind the same
 * interface a real provider (Resend, Postmark, SES, ...) would implement.
 */
class ConsoleEmailProvider implements EmailProvider {
  async send(payload: ContactFormValues): Promise<void> {
    console.log("[contact] New submission (no email provider configured):", payload);
  }
}

function getProvider(): EmailProvider {
  return new ConsoleEmailProvider();
}

export async function sendContactEmail(payload: ContactFormValues): Promise<void> {
  if (!process.env.CONTACT_TO_EMAIL) {
    console.warn("[contact] CONTACT_TO_EMAIL is not set.");
  }
  await getProvider().send(payload);
}
