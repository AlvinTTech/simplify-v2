"use client";

import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-5 pt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200 bg-white/80 px-6 py-4 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
        <Link href="/" className="text-xl font-extrabold text-slate-950">
          Simplify 
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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
          className="rounded-full bg-violet-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-slate-950"
        >
          Book Call
        </a>
      </div>
    </header>
  );
}