"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Clock,
  DatabaseZap,
  FileText,
  MessageSquareWarning,
  Repeat,
} from "lucide-react";

const problems = [
  {
    icon: MessageSquareWarning,
    title: "Leads fall through",
    text: "Enquiries come in from WhatsApp, forms, email and social media — but follow-up depends on someone remembering.",
  },
  {
    icon: Repeat,
    title: "Teams repeat work",
    text: "Your staff spend hours copying data, sending updates, preparing reports and chasing tasks manually.",
  },
  {
    icon: DatabaseZap,
    title: "Tools do not talk",
    text: "Your CRM, inbox, calendar, website and spreadsheets operate separately, slowing down execution.",
  },
  {
    icon: Clock,
    title: "Response times are slow",
    text: "Customers wait too long because simple questions and next steps still need human attention.",
  },
  {
    icon: FileText,
    title: "Reports take too long",
    text: "Managers struggle to get accurate, timely information because reporting is still manual.",
  },
  {
    icon: AlertCircle,
    title: "Growth creates chaos",
    text: "As the business grows, the old way of working creates bottlenecks, delays and unnecessary pressure.",
  },
];

export default function Problem() {
  return (
    <section className="bg-slate-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-violet-700">
            The real problem
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 md:text-6xl">
            Your team is not slow. Your systems are.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Most businesses do not need more software. They need their existing
            tools, people and processes to work together without constant manual
            effort.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/10"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-2xl font-extrabold text-slate-950">
                  {problem.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {problem.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
