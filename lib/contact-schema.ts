import { z } from "zod";

const required = "We need this one to reply.";

export const contactSchema = z.object({
  name: z.string().trim().min(1, required),
  email: z.string().trim().min(1, required).email("Hmm, that email doesn't look right. Give it another go."),
  company: z.string().trim().optional(),
  message: z.string().trim().min(1, required),
  timeline: z.enum(["Right away", "Within a month", "Just exploring"], {
    errorMap: () => ({ message: required }),
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type ContactFieldErrors = Partial<Record<keyof ContactFormValues, string>>;

export function fieldErrorsFromZod(error: z.ZodError<ContactFormValues>): ContactFieldErrors {
  const fieldErrors: ContactFieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof ContactFormValues;
    if (!fieldErrors[key]) fieldErrors[key] = issue.message;
  }
  return fieldErrors;
}
