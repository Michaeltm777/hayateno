"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AutoDir } from "@/components/AutoDir";
import { detectDir } from "@/lib/bidi";
import type { Dictionary } from "@/i18n/types";

type FormCopy = Dictionary["contact"]["form"];

type Fields = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

export function ContactForm({ copy }: { copy: FormCopy }) {
  const [fields, setFields] = useState<Fields>({ ...empty, topic: copy.topics[0] ?? "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [done, setDone] = useState(false);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function validate() {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = copy.required;
    if (!fields.email.trim()) next.email = copy.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = copy.invalidEmail;
    if (!fields.message.trim()) next.message = copy.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-gold bg-gold-soft p-8" role="status">
        <AutoDir as="h2" className="text-2xl font-semibold">
          {copy.successTitle}
        </AutoDir>
        <AutoDir as="p" className="mt-3 leading-8 text-muted">
          {copy.successText}
        </AutoDir>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-3xl border border-line bg-cream p-5 sm:p-6 md:p-8">
      <AutoDir as="p" className="text-sm text-muted">
        {copy.preview}
      </AutoDir>
      <Field label={copy.name} error={errors.name}>
        <input
          name="name"
          dir="auto"
          value={fields.name}
          onChange={(event) => update("name", event.target.value)}
          className={inputClass}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
        />
      </Field>
      <Field label={copy.email} error={errors.email}>
        <input
          name="email"
          type="email"
          dir="auto"
          value={fields.email}
          onChange={(event) => update("email", event.target.value)}
          className={inputClass}
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
        />
      </Field>
      <Field label={copy.phone}>
        <input
          name="phone"
          dir="auto"
          value={fields.phone}
          onChange={(event) => update("phone", event.target.value)}
          className={inputClass}
          autoComplete="tel"
        />
      </Field>
      <Field label={copy.topic}>
        <select
          name="topic"
          dir="auto"
          value={fields.topic}
          onChange={(event) => update("topic", event.target.value)}
          className={inputClass}
        >
          {copy.topics.map((topic) => (
            <option key={topic} dir={detectDir(topic)}>
              {topic}
            </option>
          ))}
        </select>
      </Field>
      <Field label={copy.message} error={errors.message}>
        <textarea
          name="message"
          dir="auto"
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          className={`${inputClass} min-h-36 resize-y`}
          aria-invalid={Boolean(errors.message)}
        />
      </Field>
      <button
        type="submit"
        className="rounded-full bg-purple px-6 py-3 font-semibold text-cream transition hover:bg-purple-deep"
      >
        <AutoDir>{copy.submit}</AutoDir>
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      <AutoDir as="span">{label}</AutoDir>
      {children}
      {error ? (
        <AutoDir as="span" className="text-sm font-normal text-red-700" role="alert">
          {error}
        </AutoDir>
      ) : null}
    </label>
  );
}

const inputClass =
  "w-full min-w-0 rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal text-ink outline-none focus:border-gold";
