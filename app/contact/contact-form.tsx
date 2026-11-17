"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactField, type ContactState } from "./actions";

const fields: { name: ContactField; label: string; type: "text" | "email" | "textarea" }[] = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "message", label: "Message", type: "textarea" },
];

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, initialState);
  const values = state.status === "idle" ? undefined : state.values;
  const errors = state.status === "invalid" ? state.errors : {};

  return (
    <form action={action} noValidate className="space-y-4">
      {fields.map((field) => {
        const id = `contact-${field.name}`;
        const fieldErrors = errors[field.name];
        const describedBy = fieldErrors ? `${id}-error` : undefined;
        const common = {
          id,
          name: field.name,
          defaultValue: values?.[field.name],
          required: true,
          "aria-invalid": fieldErrors ? true : undefined,
          "aria-describedby": describedBy,
          className: "w-full rounded-md border bg-tile px-3 py-2",
        };
        return (
          <div key={field.name} className="space-y-1">
            <label htmlFor={id} className="block text-sm font-medium">
              {field.label}
            </label>
            {field.type === "textarea" ? <textarea rows={6} {...common} /> : <input type={field.type} {...common} />}
            {fieldErrors && (
              <p id={describedBy} className="text-sm text-danger">
                {fieldErrors.join(" ")}
              </p>
            )}
          </div>
        );
      })}
      <button type="submit" disabled={pending} className="rounded-md border px-4 py-2">
        {pending ? "Sending..." : "Send"}
      </button>
      <p role="status" className="text-sm text-muted">
        {state.status === "not-configured" &&
          "Thanks! The contact form is not connected to email yet, so this message was not sent. Please reach me on LinkedIn for now."}
      </p>
    </form>
  );
}
