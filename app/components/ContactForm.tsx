"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      company: String(form.get("company") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      // For now this is a placeholder endpoint.
      // We’ll wire this up to AWS (API Gateway + Lambda + SES) in a later step.
      const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm text-neutral-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-neutral-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm text-neutral-700" htmlFor="company">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
          placeholder="Company / org"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm text-neutral-700" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
          placeholder="What can I help with?"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:border-neutral-500 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        {status === "sent" && <span className="text-sm text-neutral-700">Sent. Thanks!</span>}
        {status === "error" && <span className="text-sm text-red-600">{error}</span>}
      </div>

      <p className="mt-3 text-sm text-neutral-600">
  This sends to my personal inbox. Please include the best way to reach you.
</p>

<p className="mt-6 text-sm text-neutral-600">
  In AWS, I’m using API Gateway + Lambda + SES for a serverless email workflow for this contact form.
</p>
    </form>
  );
}