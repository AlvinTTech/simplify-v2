import { ArrowRight, CheckCircle2 } from "lucide-react";
import { calculateAssessmentResult } from "@/lib/assessment-score";
import LeadCapture from "./LeadCapture";

type AssessmentResultProps = {
  answers: Record<string, string | string[]>;
};

export default function AssessmentResult({ answers }: AssessmentResultProps) {
  const company = (answers.company as string) || "your business";
  const industry = (answers.industry as string) || "your industry";
  const challenge = (answers.challenge as string) || "manual work";
  const result = calculateAssessmentResult(answers);

  return (
    <main className="min-h-screen bg-white px-5 py-10 lg:px-8">
      <section className="mx-auto flex min-h-[90vh] max-w-6xl items-center justify-center">
        <div className="w-full overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 shadow-2xl shadow-violet-600/10 md:p-14">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-violet-700">
            Your AI Roadmap
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold tracking-[-0.05em] text-slate-950 md:text-7xl">
            {company} has a strong AI opportunity.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Based on your answers, Simplify recommends starting with systems
            that reduce {challenge.toLowerCase()} in your{" "}
            {industry.toLowerCase()} operations.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-slate-400">
                Opportunity Score
              </p>
              <p className="mt-4 text-6xl font-extrabold text-violet-700">
                {result.score}%
              </p>
              <p className="mt-3 text-slate-600">
                High potential for automation and system integration.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-slate-400">
                Estimated Time Saved
              </p>
              <p className="mt-4 text-6xl font-extrabold text-violet-700">
                {result.estimatedHours}h
              </p>
              <p className="mt-3 text-slate-600">
                Approximate weekly time savings after implementation.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-slate-400">
                First Build
              </p>
              <p className="mt-4 text-3xl font-extrabold text-slate-950">
                {result.firstBuild}
              </p>
              <p className="mt-3 text-slate-600">
                Start by automating the most repetitive business process.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-violet-200 bg-white p-7">
            <h2 className="text-2xl font-extrabold text-slate-950">
              Recommended Systems
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {result.recommendedSystems.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-violet-700" />
                  <p className="font-bold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <LeadCapture answers={answers} />

          <a
            href="tel:+254754561299"
            className="group mt-10 inline-flex items-center justify-center rounded-full bg-violet-600 px-8 py-4 font-extrabold text-white shadow-xl shadow-violet-600/20 transition hover:bg-slate-950"
          >
            Book Your Roadmap Call
            <ArrowRight
              className="ml-2 transition group-hover:translate-x-1"
              size={18}
            />
          </a>
        </div>
      </section>
    </main>
  );
}