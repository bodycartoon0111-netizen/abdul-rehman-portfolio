"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  budgetOptions,
  contactSchema,
  type ContactFormInput,
  type ContactResult,
} from "@/lib/validation";
import { submitContact } from "@/lib/actions";
import { services } from "@/data/services";

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-pine focus:outline-none focus:ring-2 focus:ring-pine/10 disabled:opacity-60";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";
const errorClass = "mt-1.5 text-sm text-red-600";

export default function ContactForm() {
  const [result, setResult] = useState<ContactResult | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      service: undefined,
      budget: undefined,
      message: "",
      company_website: "",
    },
  });

  const onSubmit = (values: ContactFormInput) => {
    setResult(null);
    startTransition(async () => {
      const res = await submitContact(values);
      setResult(res);
      if (res.success) reset();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={inputClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="cf-name-error" role="alert" className={errorClass}>{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="cf-email-error" role="alert" className={errorClass}>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-company" className={labelClass}>Company</label>
          <input
            id="cf-company"
            type="text"
            autoComplete="organization"
            placeholder="Company or brand (optional)"
            className={inputClass}
            {...register("company")}
          />
          {errors.company && (
            <p role="alert" className={errorClass}>{errors.company.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-website" className={labelClass}>Website</label>
          <input
            id="cf-website"
            type="url"
            autoComplete="url"
            placeholder="https://yourwebsite.com (optional)"
            className={inputClass}
            aria-invalid={!!errors.website}
            {...register("website")}
          />
          {errors.website && (
            <p role="alert" className={errorClass}>{errors.website.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-service" className={labelClass}>
            Service needed <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <select
            id="cf-service"
            className={inputClass}
            aria-invalid={!!errors.service}
            {...register("service")}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
          {errors.service && (
            <p role="alert" className={errorClass}>{errors.service.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-budget" className={labelClass}>
            Budget range <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <select
            id="cf-budget"
            className={inputClass}
            aria-invalid={!!errors.budget}
            {...register("budget")}
          >
            <option value="">Select a range…</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          {errors.budget && (
            <p role="alert" className={errorClass}>{errors.budget.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Project goal &amp; details <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={6}
          placeholder="What are you trying to achieve? Current situation, timeline, anything that helps me prepare a useful reply…"
          className={inputClass}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="cf-message-error" role="alert" className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      {/* Honeypot — invisible to humans, irresistible to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="cf-company-website">Company website</label>
        <input id="cf-company-website" type="text" tabIndex={-1} autoComplete="off" {...register("company_website")} />
      </div>

      {result && (
        <div
          role={result.success ? "status" : "alert"}
          className={`rounded-lg border px-4 py-3 text-sm ${
            result.success
              ? "border-green-300 bg-green-50 text-green-900"
              : "border-red-300 bg-red-50 text-red-900"
          }`}
        >
          {result.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-full items-center justify-center rounded-lg bg-pine px-8 py-4 text-base font-semibold text-white transition hover:bg-pine-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isPending ? "Sending…" : "Send message"}
      </button>
      <p className="text-xs text-muted">
        I reply to every serious enquiry within one business day.
      </p>
    </form>
  );
}
