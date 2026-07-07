"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = [
  "Identify where time is being wasted",
  "Map tasks AI can automate",
  "Find tools that should be connected",
  "Build a clear AI roadmap",
];

export default function CTA() {
  return (
    <section id="contact" className="bg-white px-5 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-violet-600/20 md:p-14 lg:p-16"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-violet-300">
              Let&apos;s map your business
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
              Ready to see what AI can remove from your workload?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              In a strategy session, we look at your workflows, identify where
              your team is losing time and map the first intelligent system your
              business should build.
            </p>

            <a
              href="tel:+254754561299"
              className="group mt-9 inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-extrabold text-slate-950 transition hover:bg-violet-600 hover:text-white"
            >
              Call +254 754 561 299
              <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={18} />
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-violet-300">
              What we&apos;ll uncover
            </p>

            <div className="mt-6 space-y-4">
              {points.map((point) => (
                <div key={point} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-violet-300" size={20} />
                  <p className="leading-7 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}