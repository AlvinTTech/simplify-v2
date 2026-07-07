"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Calendar,
  Database,
  FileText,
  Mail,
  MessageCircle,
} from "lucide-react";

const steps = [
  { label: "Customer enquiry", detail: "New WhatsApp message received", icon: MessageCircle },
  { label: "AI agent reads it", detail: "Intent and lead quality detected", icon: Bot },
  { label: "CRM updated", detail: "Customer profile created automatically", icon: Database },
  { label: "Proposal drafted", detail: "Business document generated", icon: FileText },
  { label: "Meeting booked", detail: "Calendar invite created", icon: Calendar },
  { label: "Email sent", detail: "Follow-up delivered instantly", icon: Mail },
];

export default function WorkflowVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-violet-600/10">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-extrabold text-slate-950">Live AI Workflow</p>
          <p className="text-xs text-slate-500">Running automatically</p>
        </div>

        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
          Active
        </span>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.14, duration: 0.45 }}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-600 text-white">
                <Icon size={19} />
              </div>

              <div>
                <p className="font-bold text-slate-950">{step.label}</p>
                <p className="text-sm text-slate-500">{step.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}