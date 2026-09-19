import type { ContactFieldErrors } from "./contact-schema";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: ContactFieldErrors;
  values: { name: string; email: string; company: string; message: string; timeline: string };
}

export const initialContactState: ContactFormState = {
  status: "idle",
  values: { name: "", email: "", company: "", message: "", timeline: "" },
};
