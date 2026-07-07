"use client";

import { motion } from "framer-motion";
import Section from "@/components/shared/Section";

const metrics = [
  {
    value: "80%",
    label: "Less manual work",
    text: "Reduce repetitive admin by connecting tools and automating repeatable workflows.",
  },
  {
    value: "3x",
    label: "Faster follow-up",
    text: "Respond to leads, customers and internal requests faster with AI-powered workflows.",
  },
  {
    value: "24/7",
    label: "Always-on execution",
    text: "Let systems continue handling tasks even when your team is offline.",
  },
  {
    value: "15+",
    label: "Tool integrations",
    text: "Connect CRMs, inboxes, forms, calendars, spreadsheets and communication tools.",
  },
];

export default function Metrics() {
  return (
    <Section className="bg-white">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-violet-600/10"
          >
            <p className="text-5xl font-extrabold tracking-[-0.05em] text-violet-700">
              {metric.value}
            </p>

            <h3 className="mt-5 text-xl font-extrabold text-slate-950">
              {metric.label}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">{metric.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}