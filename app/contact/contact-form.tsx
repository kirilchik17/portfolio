"use client";

import { ArrowRight } from "lucide-react";
import { useActionState } from "react";
import { sendContactMessage, type ContactField, type ContactState } from "./actions";

const fields: {
  name: ContactField;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  autoComplete?: string;
  span: string;
}[] = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name", autoComplete: "name", span: "" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com", autoComplete: "email", span: "" },
  { name: "message", label: "Message", type: "textarea", placeholder: "What's on your mind?", span: "sm:col-span-2" },
];

const initialState: ContactState = { status: "idle" };

const control =
  "w-full rounded-control border border-line-2 bg-tile-2 px-3.5 py-3 text-[14.5px] text-ink placeholder:text-faint outline-none transition focus-visible:border-accent focus-visible:shadow-[0_0_0_4px_var(--accent-soft)] focus-visible:outline-none aria-invalid:border-danger";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, initialState);
  const values = state.status === "idle" ? undefined : state.values;
  const errors = state.status === "invalid" ? state.errors : {};

  return (
    <form action={action} noValidate className="grid content-start gap-2.5 sm:grid-cols-2">
      {fields.map((field) => {
        const id = `contact-${field.name}`;
        const fieldErrors = errors[field.name];
        const describedBy = fieldErrors ? `${id}-error` : undefined;
        const common = {
          id,
          name: field.name,
          placeholder: field.placeholder,
          autoComplete: field.autoComplete,
          defaultValue: values?.[field.name],
          required: true,
          "aria-invalid": fieldErrors ? true : undefined,
          "aria-describedby": describedBy,
          className: control,
        };
        return (
          <div key={field.name} className={`grid content-start gap-1.5 ${field.span}`}>
            <label htmlFor={id} className="text-[12.5px] font-medium text-muted">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea rows={5} {...common} className={`${control} min-h-[120px] resize-y`} />
            ) : (
              <input type={field.type} {...common} />
            )}
            {fieldErrors && (
              <p id={describedBy} className="text-[13px] text-danger">
                {fieldErrors.join(" ")}
              </p>
            )}
          </div>
        );
      })}
      <div className="mt-1 flex flex-wrap items-center justify-between gap-3 sm:col-span-2">
        <p role="status" className="max-w-[300px] text-[13px] text-muted">
          {state.status === "not-configured" &&
            "Thanks! The contact form is not connected to email yet, so this message was not sent. Please reach me on LinkedIn for now."}
        </p>
        <button type="submit" disabled={pending} className="btn btn-primary ml-auto">
          {pending ? "Sending..." : "Send message"}
          <ArrowRight aria-hidden className="size-4" />
        </button>
      </div>
    </form>
  );
}
