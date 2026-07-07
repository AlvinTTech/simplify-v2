"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

const stories = [
  {
    label: "Sales",
    title: "No more forgotten leads.",
    before:
      "Leads came in through WhatsApp, calls and website forms, but follow-up depended on manual tracking.",
    after:
      "AI qualifies leads, updates the CRM, sends follow-ups and books meetings automatically.",
  },
  {
    label: "Operations",
    title: "Less coordination. More execution.",
    before:
      "Managers spent hours checking updates, reminding teams and chasing task completion.",
    after:
      "Automated workflows send reminders, update task boards and notify the right people at the right time.",
  },
  {
    label: "Reporting",
    title: "Decisions without waiting for reports.",
    before:
      "Reports were prepared manually across spreadsheets, emails and different business tools.",
    after:
      "AI pulls data from connected systems and creates clear summaries for faster decision-making.",
  },
];

export default function OutcomeStories() {
  return (
    <Section id="outcomes" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Outcomes"
          title="What changes when your systems start working for you."
          description="The goal is not to add AI for the sake of it. The goal is to remove delays, reduce manual work and help your business operate with more clarity."
        />

        <div className="grid gap-5">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.07 }}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-violet-600/10"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-full bg-violet-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-violet-700">
                  {story.label}
                </span>

                <ArrowRight className="text-slate-400" size={20} />
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-slate-950">
                {story.title}
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">
                    Before
                  </p>

                  <p className="mt-3 leading-7 text-slate-600">
                    {story.before}
                  </p>
                </div>

                <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      className="text-violet-700"
                      size={18}
                    />

                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-700">
                      After Simplify
                    </p>
                  </div>

                  <p className="mt-3 leading-7 text-slate-700">
                    {story.after}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}