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
    <Section id="process" className="bg-white">
      <SectionHeader
        eyebrow="How it works"
        title="From messy workflows to intelligent systems."
        description="We do not start with tools. We start with how your business works, then design the simplest AI system that improves it."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.07 }}
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-violet-600/10"
          >
            <span className="text-sm font-extrabold text-violet-700">
              {step.number}
            </span>

            <h3 className="mt-5 text-2xl font-extrabold text-slate-950">
              {step.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}