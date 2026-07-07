"use client";

import { motion } from "framer-motion";
import { agents } from "@/lib/homepage-data";

export default function AiWorkforce() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white lg:px-8">
      <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-violet-300">
            Meet your AI workforce
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
            Agents that execute work across your business.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            These are not generic chatbots. They are task-focused AI agents
            connected to your tools, workflows and business goals.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => {
            const Icon = agent.icon;

            return (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.07 }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.08]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500 text-white shadow-lg shadow-violet-500/20">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-2xl font-extrabold">
                  {agent.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {agent.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}