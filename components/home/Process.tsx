"use client";

import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We review how your business currently works, where time is being lost, and which processes can be improved with AI.",
  },
  {
    number: "02",
    title: "Design",
    text: "We map the right workflows, tools, integrations and AI agents around your actual business operations.",
  },
  {
    number: "03",
    title: "Deploy",
    text: "We build, test and connect the automations so they work inside your existing systems.",
  },
  {
    number: "04",
    title: "Improve",
    text: "We monitor performance, refine the system and help your team keep improving how work gets done.",
  },
];

export default function Process() {
  return (
    <Section id="process" className="bg-slate-950 text-white">
      <SectionHeader
        eyebrow="How it works"
        title="From messy workflows to intelligent systems."
        description="We start by understanding how your business works, then design the simplest AI system that improves it."
        theme="dark"
      />

      <div className="relative mt-16">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 lg:block" />

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className="relative grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.08] lg:grid-cols-[80px_1fr]"
            >
              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-violet-500 text-sm font-extrabold text-white shadow-lg shadow-violet-500/20">
                {step.number}
              </div>

              <div>
                <h3 className="text-2xl font-extrabold">{step.title}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}