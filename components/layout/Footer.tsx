import Link from "next/link";

const footerLinks = {
  Solutions: [
    { label: "Workflow Automation", href: "#solutions" },
    { label: "AI Agents", href: "#solutions" },
    { label: "System Integration", href: "#solutions" },
    { label: "AI Strategy", href: "#solutions" },
  ],
  Company: [
    { label: "Process", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "Outcomes", href: "#outcomes" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-600 text-lg font-black text-white">
              S
            </div>

            <div>
              <p className="text-xl font-extrabold text-slate-950">Simplify</p>
              <p className="text-xs font-semibold text-slate-500">
                Intelligent business systems
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-md leading-7 text-slate-600">
            Simplify builds AI-powered systems that automate repetitive work,
            connect your tools, and help your team do more with less.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-extrabold text-slate-950">{title}</h4>

            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-600 transition hover:text-violet-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-extrabold text-slate-950">Contact</h4>

          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <a
                href="tel:+254754561299"
                className="font-medium transition hover:text-violet-600"
              >
                +254 754 561 299
              </a>
            </li>

            <li>
              <a
                href="mailto:hello@simplify.ke"
                className="font-medium transition hover:text-violet-600"
              >
                hello@simplify.ke
              </a>
            </li>

            <li>Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
        <p>© 2026 Simplify. All rights reserved.</p>
        <p>AI systems that help businesses do more with less.</p>
      </div>
    </footer>
  );
}