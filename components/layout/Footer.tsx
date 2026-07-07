import Link from "next/link";

const footerLinks = {
  Solutions: ["Workflow Automation", "AI Agents", "System Integration", "AI Strategy"],
  Company: ["About", "Industries", "Contact"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-extrabold text-slate-950">
            Simplify
          </Link>

          <p className="mt-4 max-w-md leading-7 text-slate-600">
            Simplify builds intelligent business systems that automate
            repetitive work, connect your tools and help your team do more with
            less.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-extrabold text-slate-950">{title}</h4>

            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-600 transition hover:text-violet-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
        <p>© 2026 Simplify. All rights reserved.</p>
        <a href="tel:+254754561299" className="font-bold text-slate-700 hover:text-violet-600">
          +254 754 561 299
        </a>
      </div>
    </footer>
  );
}