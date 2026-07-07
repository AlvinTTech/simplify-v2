type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={isCenter ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <p
        className={`text-sm font-extrabold uppercase tracking-[0.25em] ${
          isDark ? "text-violet-300" : "text-violet-700"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-4 text-4xl font-extrabold tracking-[-0.04em] md:text-6xl ${
          isDark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}