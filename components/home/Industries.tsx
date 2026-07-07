"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
} from "lucide-react";

const industries = [
  {
    icon: Truck,
    title: "Logistics",
    text: "Automate delivery updates, customer communication, dispatch tracking and operational reporting.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Simplify admissions, parent communication, student records, reminders and administrative workflows.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    text: "Automate order updates, inventory alerts, customer support, follow-ups and sales reporting.",
  },
  {
    icon: Building2,
    title: "Professional Services",
    text: "Streamline client onboarding, proposals, scheduling, document creation and internal task tracking.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    text: "Improve appointment reminders, patient follow-ups, internal coordination and reporting workflows.",
  },
  {
    icon: Landmark,
    title: "NGOs & Organizations",
    text: "Automate donor updates, impact reporting, grant tracking, program records and stakeholder communication.",
  },
];

export default function Industries() {
  return (
    <section className="bg-slate-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-violet-700">
            Industries
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 md:text-6xl">
            Built around how your business actually works.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Every business has different workflows. We design AI systems around
            your operations, not generic templates.
          </p>
        </div>

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
      </div>
    </section>
  );
}