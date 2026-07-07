"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/homepage-data";
import { roles } from "@/data/roles";
import { useRole } from "@/components/providers/RoleContext";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import Card from "@/components/shared/Card";

export default function Industries() {
  const { role } = useRole();
  const selectedRole = roles.find((item) => item.id === role) ?? roles[0];

  return (
    <Section id="industries" className="bg-slate-50">
      <SectionHeader
        eyebrow="Industries"
        title={`AI systems shaped around ${selectedRole.label.toLowerCase()} work.`}
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
            >
              <Card className="group h-full">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-2xl font-extrabold text-slate-950">
                  {industry.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {industry.text}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}