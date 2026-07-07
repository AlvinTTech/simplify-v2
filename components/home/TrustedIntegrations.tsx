"use client";

import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

const integrations = [
  "OpenAI",
  "Google Workspace",
  "Microsoft 365",
  "WhatsApp",
  "HubSpot",
  "Zoho CRM",
  "Notion",
  "Airtable",
  "Make",
  "n8n",
  "Zapier",
  "Slack",
];

export default function TrustedIntegrations() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Integrations"
        title="Built around the tools your business already uses."
        description="Simplify connects your existing platforms into intelligent workflows, so your business becomes faster without replacing everything you already use."
        align="center"
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {integrations.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.04 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 text-center font-extrabold text-slate-700 transition hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:text-violet-700 hover:shadow-xl hover:shadow-violet-600/10"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}