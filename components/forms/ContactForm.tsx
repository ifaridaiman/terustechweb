"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

import { submitContactForm } from "@/app/contact/actions";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { initialContactState } from "@/lib/contact-state";

type RequiredField = "name" | "email" | "message" | "timeline";
const fieldOrder: RequiredField[] = ["name", "email", "message", "timeline"];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-5 font-body text-body font-medium text-on-accent transition-transform duration-200 ease-soft hover:-translate-y-0.5 focus-visible:shadow-focus-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
    >
      {pending ? "Sending…" : "Send it"}
    </button>
  );
}

const inputClasses =
  "h-12 w-full rounded-md border border-ink-muted bg-paper px-4 text-body text-ink focus-visible:outline-none focus-visible:shadow-focus-ring";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialContactState);
  const [clientErrors, setClientErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const timelineRef = useRef<HTMLSelectElement>(null);
  const fieldRefs = { name: nameRef, email: emailRef, message: messageRef, timeline: timelineRef };

  const errors = { ...clientErrors, ...state.fieldErrors };

  useEffect(() => {
    if (state.status !== "error") return;
    const firstErrorField = fieldOrder.find((field) => errors[field]);
    if (firstErrorField) fieldRefs[firstErrorField].current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  function validateField(name: keyof ContactFormValues, value: string) {
    const result = contactSchema.shape[name].safeParse(value);
    setClientErrors((prev) => ({
      ...prev,
      [name]: result.success ? undefined : result.error.issues[0]?.message,
    }));
  }

  if (state.status === "success") {
    return (
      <div className="rounded-md border border-line bg-surface p-6">
        <p className="text-body-lg text-ink">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field blank</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="rounded-md border border-danger bg-accent-tint px-4 py-3 text-body text-danger"
        >
          {state.message}
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-1 block text-body font-medium text-ink">
          Name
        </label>
        <input
          ref={nameRef}
          id="name"
          name="name"
          type="text"
          defaultValue={state.values.name}
          onBlur={(event) => validateField("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClasses}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-small text-danger">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-body font-medium text-ink">
          Email
        </label>
        <input
          ref={emailRef}
          id="email"
          name="email"
          type="email"
          defaultValue={state.values.email}
          onBlur={(event) => validateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClasses}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-small text-danger">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="mb-1 block text-body font-medium text-ink">
          Company <span className="text-ink-muted">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          defaultValue={state.values.company}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-body font-medium text-ink">
          What are you building?
        </label>
        <textarea
          ref={messageRef}
          id="message"
          name="message"
          rows={5}
          placeholder="A few lines is plenty."
          defaultValue={state.values.message}
          onBlur={(event) => validateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClasses} h-auto resize-y py-3`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-small text-danger">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="timeline" className="mb-1 block text-body font-medium text-ink">
          When do you want to start?
        </label>
        <select
          ref={timelineRef}
          id="timeline"
          name="timeline"
          defaultValue={state.values.timeline}
          onBlur={(event) => validateField("timeline", event.target.value)}
          aria-invalid={Boolean(errors.timeline)}
          aria-describedby={errors.timeline ? "timeline-error" : undefined}
          className={inputClasses}
        >
          <option value="" disabled>
            Choose one
          </option>
          <option value="Right away">Right away</option>
          <option value="Within a month">Within a month</option>
          <option value="Just exploring">Just exploring</option>
        </select>
        {errors.timeline && (
          <p id="timeline-error" className="mt-1 text-small text-danger">
            {errors.timeline}
          </p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}
