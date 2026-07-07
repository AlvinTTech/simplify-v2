"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/homepage-data";
import Section from "@/components/shared/Section";
import Card from "@/components/shared/Card";

export default function Solutions() {
  return (
    <Section id="solutions" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-36">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-violet-700">
            What we build
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 md:text-6xl">
            Systems that remove work, not just software that adds more.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Simplify builds practical AI systems around your real business
            operations. The goal is not to add another tool. The goal is to make
            the tools you already use work harder for you.
          </p>

          <a
            href="tel:+254754561299"
            className="group mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 font-extrabold text-white transition hover:bg-violet-600"
          >
            Map Your AI Opportunity
            <ArrowRight
              className="ml-2 transition group-hover:translate-x-1"
              size={18}
            />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="group h-full bg-slate-50 hover:border-violet-200 hover:bg-white">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-600/20">
                    <Icon size={23} />
                  </div>

                  <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.18em] text-violet-700">
                    {solution.outcome}
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold text-slate-950">
                    {solution.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {solution.text}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}