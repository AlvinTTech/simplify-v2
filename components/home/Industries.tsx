"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/homepage-data";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

export default function Industries() {
  return (
    <Section id="industries" className="bg-slate-50">
      <SectionHeader
        eyebrow="Industries"
        title="Built around how your business actually works."
        description="Every business has different workflows. We design AI systems around your operations, not generic templates."
        align="center"
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.07 }}
              className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">
                <Icon size={22} />
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-slate-950">
                {industry.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {industry.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}