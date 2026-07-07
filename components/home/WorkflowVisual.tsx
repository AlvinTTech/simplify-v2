"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { roles } from "@/data/roles";
import { useRole } from "@/components/providers/RoleContext";

export default function WorkflowVisual() {
  const { role } = useRole();
  const selectedRole = roles.find((item) => item.id === role) ?? roles[0];

  return (
    <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-violet-600/10">
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-extrabold text-slate-950">
            {selectedRole.workflowTitle}
          </p>
          <p className="text-xs text-slate-500">
            {selectedRole.workflowSubtitle}
          </p>
        </div>

        <motion.span
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700"
        >
          Running
        </motion.span>
      </div>

      <div className="relative">
        <motion.div
          key={`line-${selectedRole.id}`}
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: selectedRole.steps.length * 0.45, ease: "easeInOut" }}
          className="absolute left-[22px] top-5 w-[2px] rounded-full bg-gradient-to-b from-violet-600 via-emerald-400 to-violet-200"
        />

        <div className="space-y-3">
          {selectedRole.steps.map((step, index) => (
            <motion.div
              key={`${selectedRole.id}-${step}`}
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: index * 0.18, duration: 0.45 }}
              className="relative flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, backgroundColor: "#7c3aed" }}
                animate={{
                  scale: [0.8, 1.08, 1],
                  backgroundColor: ["#7c3aed", "#10b981", "#7c3aed"],
                }}
                transition={{ delay: index * 0.18 + 0.25, duration: 0.6 }}
                className="z-10 grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-black text-white"
              >
                {index + 1}
              </motion.div>

              <div className="min-w-0 flex-1">
                <p className="font-bold text-slate-950">{step}</p>
                <p className="text-sm text-slate-500">Completed automatically</p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.18 + 0.45, duration: 0.3 }}
              >
                <CheckCircle2 className="shrink-0 text-emerald-500" size={20} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}