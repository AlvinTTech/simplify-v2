"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Calendar,
  CheckCircle2,
  Database,
  FileText,
  Mail,
  MessageCircle,
  ReceiptText,
} from "lucide-react";

const steps = [
  { label: "WhatsApp enquiry", detail: "New customer message received", icon: MessageCircle },
  { label: "Lead qualified", detail: "AI checks intent, budget and urgency", icon: Bot },
  { label: "CRM updated", detail: "Customer record created automatically", icon: Database },
  { label: "Proposal generated", detail: "Document prepared from business data", icon: FileText },
  { label: "Meeting booked", detail: "Calendar invite sent instantly", icon: Calendar },
  { label: "Invoice created", detail: "Payment request prepared", icon: ReceiptText },
  { label: "Follow-up sent", detail: "Email and WhatsApp reminders delivered", icon: Mail },
];

export default function WorkflowVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-violet-600/10">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-extrabold text-slate-950">
            Live AI Workflow
          </p>
          <p className="text-xs text-slate-500">
            Example: lead to booked meeting
          </p>
        </div>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
          Running
        </span>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.12, duration: 0.45 }}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-600 text-white">
                <Icon size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-bold text-slate-950">{step.label}</p>
                <p className="text-sm text-slate-500">{step.detail}</p>
              </div>

              <CheckCircle2 className="shrink-0 text-emerald-500" size={20} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}