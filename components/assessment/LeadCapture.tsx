"use client";

import { useState } from "react";

type LeadCaptureProps = {
  answers: Record<string, string | string[]>;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function LeadCapture({ answers }: LeadCaptureProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isFormComplete =
    form.name.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.company.trim();

  function updateField(field: keyof FormState, value: string) {
    setError("");
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit() {
    setError("");

    if (!isFormComplete) {
      setError("Please fill in all fields before saving your roadmap.");
      return;
    }

    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lead: form,
          answers,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save roadmap");
      }

      setSubmitted(true);
    } catch (submissionError) {
      console.error("Lead capture error:", submissionError);
      setError("Something went wrong while saving your roadmap. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-7">
      <h2 className="text-2xl font-extrabold text-slate-950">
        Send this roadmap to your inbox
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        Enter your details so Simplify can follow up with your AI roadmap and
        next steps.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-violet-500"
        />

        <input
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-violet-500"
        />

        <input
          type="tel"
          placeholder="Phone number"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-violet-500"
        />

        <input
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-violet-500"
        />
      </div>

      {error && (
        <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
          {error}
        </p>
      )}

      {submitted && (
        <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">
          Your roadmap has been saved. We will follow up with the next steps.
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading || submitted}
        className="mt-6 rounded-full bg-slate-950 px-7 py-4 font-extrabold text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitted ? "Roadmap Saved" : loading ? "Saving..." : "Save My Roadmap"}
      </button>
    </div>
  );
}