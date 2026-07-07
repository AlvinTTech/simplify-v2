"use client";

import { motion } from "framer-motion";
import { roles } from "@/data/roles";
import { useRole } from "@/components/providers/RoleContext";

export default function RoleSelector() {
  const { role, setRole } = useRole();

  return (
    <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
      <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-slate-500">
        Change perspective
      </p>

      <div className="flex flex-wrap gap-2">
        {roles.map((item) => (
          <motion.button
            whileTap={{ scale: 0.96 }}
            key={item.id}
            onClick={() => setRole(item.id)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              role === item.id
                ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                : "border border-slate-200 bg-white text-slate-700 hover:border-violet-300 hover:text-violet-700"
            }`}
          >
            {item.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}