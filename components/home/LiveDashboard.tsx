"use client";

import { motion } from "framer-motion";
import { Activity, Clock, MousePointerClick, Zap } from "lucide-react";
import { roles } from "@/data/roles";
import { useRole } from "@/components/providers/RoleContext";

const metrics = {
  ceo: [
    ["42", "Tasks automated", Zap],
    ["18", "Leads processed", MousePointerClick],
    ["6h", "Time saved today", Clock],
    ["98%", "System uptime", Activity],
  ],
  sales: [
    ["31", "Leads qualified", Zap],
    ["14", "Follow-ups sent", MousePointerClick],
    ["8", "Meetings booked", Clock],
    ["92%", "Pipeline updated", Activity],
  ],
  operations: [
    ["27", "Tasks assigned", Zap],
    ["19", "Updates sent", MousePointerClick],
    ["5h", "Admin saved", Clock],
    ["96%", "Workflow success", Activity],
  ],
  marketing: [
    ["12", "Posts drafted", Zap],
    ["6", "Campaigns queued", MousePointerClick],
    ["4h", "Content time saved", Clock],
    ["89%", "Reports synced", Activity],
  ],
  finance: [
    ["16", "Invoices prepared", Zap],
    ["9", "Reminders sent", MousePointerClick],
    ["3h", "Processing saved", Clock],
    ["95%", "Records updated", Activity],
  ],
  education: [
    ["24", "Parent updates", Zap],
    ["11", "Enquiries handled", MousePointerClick],
    ["5h", "Admin saved", Clock],
    ["94%", "Records synced", Activity],
  ],
  ngo: [
    ["18", "Reports drafted", Zap],
    ["13", "Donor updates", MousePointerClick],
    ["6h", "Admin saved", Clock],
    ["91%", "Grant tracker synced", Activity],
  ],
};

export default function LiveDashboard() {
  const { role } = useRole();
  const selectedRole = roles.find((item) => item.id === role) ?? roles[0];
  const selectedMetrics = metrics[selectedRole.id];

  return (
    <div className="mt-5 rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl shadow-violet-600/10">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-extrabold">Today&apos;s Activity</p>
          <p className="text-xs text-slate-400">{selectedRole.label} dashboard</p>
        </div>

        <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-bold text-violet-200">
          Live
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {selectedMetrics.map(([value, label, Icon], index) => (
          <motion.div
            key={label as string}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
          >
            <Icon className="text-violet-300" size={18} />
            <p className="mt-4 text-2xl font-extrabold">{value}</p>
            <p className="mt-1 text-xs font-semibold text-slate-400">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}