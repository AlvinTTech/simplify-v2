"use client";

import { motion, AnimatePresence } from "framer-motion";
import { roles } from "@/data/roles";
import { useRole } from "@/components/providers/RoleContext";

export default function RoleIntro() {
  const { setRole, hasSelectedRole } = useRole();

  return (
    <AnimatePresence>
      {!hasSelectedRole && (
        <motion.section
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white px-5"
        >
          <div className="absolute left-1/2 top-0 h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-violet-700">
              Personalize your Simplify experience
            </p>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] text-slate-950 md:text-7xl">
              What best describes you?
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Choose your role and we will show how Simplify can help your work
              move faster.
            </p>

            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
              {roles.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setRole(item.id)}
                  className="rounded-full border border-slate-200 bg-white px-6 py-4 font-extrabold text-slate-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-600 hover:text-white hover:shadow-xl hover:shadow-violet-600/20"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}