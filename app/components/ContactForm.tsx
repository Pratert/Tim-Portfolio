"use client";

import { useState } from "react";

const API_URL = "https://o4jwlupa53.execute-api.us-east-1.amazonaws.com/contact";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  async function handleSubmit() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Name, email, and message are required.");
      setFormState("error");
      return;
    }

    setFormState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, honeypot }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormState("success");
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMessage("Unable to send message. Please try again or reach out via LinkedIn.");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="border border-emerald-200 bg-emerald-50 rounded-xl px-6 py-8 text-center mt-6">
        <p className="text-sm font-medium text-emerald-800 mb-1">Message sent</p>
        <p className="text-sm text-emerald-700">
          Thanks for reaching out. I will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {/* Honeypot field - hidden from real users */}
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-1.5">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            maxLength={100}
            className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 bg-white"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-1.5">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            maxLength={100}
            className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-1.5">
          Company (optional)
        </label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company / org"
          maxLength={100}
          className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 bg-white"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-1.5">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What can I help with?"
          maxLength={2000}
          rows={6}
          className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 bg-white resize-y"
        />
      </div>

      {formState === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-neutral-400">
          This sends directly to my inbox.
        </p>
        <button
          onClick={handleSubmit}
          disabled={formState === "submitting"}
          className="inline-flex items-center gap-2 text-sm font-medium bg-neutral-900 text-white px-5 py-2 rounded-lg hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState === "submitting" ? "Sending..." : "Send message"}
        </button>
      </div>
    </div>
  );
}