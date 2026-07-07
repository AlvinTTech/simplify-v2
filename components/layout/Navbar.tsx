"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-5 pt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/70 bg-white/85 px-5 py-4 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-600 text-lg font-black text-white shadow-lg shadow-violet-600/20">
            S
          </div>

          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-tight text-slate-950">
              Simplify
            </p>
            <p className="hidden text-xs font-semibold text-slate-500 sm:block">
              Intelligent business systems
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-slate-600 transition hover:text-violet-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+254754561299"
          className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-violet-600 lg:inline-flex"
        >
          Get Roadmap
        </a>

        <button
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-violet-50 hover:text-violet-600"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:+254754561299"
              className="mt-2 rounded-2xl bg-violet-600 px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-slate-950"
            >
              Get Your AI Roadmap
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}