"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WorkflowVisual from "./WorkflowVisual";

const tools = ["Sales", "Finance", "Logistics", "Operations", "Support", "Marketing"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
      <div className="absolute left-1/2 top-0 h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.25em] text-violet-700"
          >
            AI for modern businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="max-w-5xl text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] text-slate-950 md:text-7xl"
          >
            Your Business Shouldn’t Stop When Your Team Does.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl"
          >
            We build intelligent systems that answer customers, update your CRM, 
            create proposals, schedule meetings, follow up with leads and connect 
            every part of your business without breaking the bank.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="tel:+254754561299"
              className="group inline-flex items-center justify-center rounded-full bg-violet-600 px-7 py-4 font-extrabold text-white shadow-xl shadow-violet-600/20 transition hover:bg-slate-950"
            >
              See Your AI Opportunity
              <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={18} />
            </a>

            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-extrabold text-slate-950 transition hover:border-violet-600 hover:text-violet-600"
            >
              See Solutions
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-bold text-slate-500">
            {tools.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <WorkflowVisual />
      </div>
    </section>
  );
}