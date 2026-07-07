"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { assessmentQuestions } from "@/data/assessment";
import AssessmentResult from "./AssessmentResult";
import ProgressBar from "./ProgressBar";

type Answers = Record<string, string | string[]>;

export default function AssessmentWizard() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);

  const totalSteps = assessmentQuestions.length;
  const currentQuestion = assessmentQuestions[currentStep];

  if (showResult) {
    return <AssessmentResult answers={answers} />;
  }

  if (!currentQuestion && started) {
    return <AssessmentResult answers={answers} />;
  }

  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const isLastStep = currentStep === totalSteps - 1;

  const hasAnswer = Array.isArray(currentAnswer)
    ? currentAnswer.length > 0
    : Boolean(currentAnswer);

  function updateAnswer(value: string) {
    if (!currentQuestion) return;

    if (currentQuestion.type === "multi-select") {
      const existing = Array.isArray(currentAnswer) ? currentAnswer : [];

      setAnswers({
        ...answers,
        [currentQuestion.id]: existing.includes(value)
          ? existing.filter((item) => item !== value)
          : [...existing, value],
      });

      return;
    }

    setAnswers({
      ...answers,
      [currentQuestion.id]: value,
    });
  }

  function nextStep() {
    if (!hasAnswer) return;

    if (isLastStep) {
      setShowResult(true);
      return;
    }

    setCurrentStep((step) => step + 1);
  }

  function previousStep() {
    setCurrentStep((step) => Math.max(step - 1, 0));
  }

  if (!started) {
    return (
      <main className="min-h-screen bg-white px-5 py-10 lg:px-8">
        <section className="mx-auto flex min-h-[90vh] max-w-6xl items-center justify-center">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 text-center shadow-2xl shadow-violet-600/10 md:p-14 lg:p-20">
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-violet-700">
                Simplify AI Assessment
              </p>

              <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] text-slate-950 md:text-7xl">
                Discover where AI can transform your business.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                In about 3 minutes, we will help you identify where your business
                is losing time, what can be automated, and which AI systems you
                should build first.
              </p>

              <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left md:grid-cols-2">
                {[
                  "AI Opportunity Score",
                  "Recommended Automations",
                  "Estimated Time Saved",
                  "Implementation Roadmap",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <CheckCircle2 className="text-violet-700" size={20} />
                    <p className="font-bold text-slate-800">{item}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStarted(true)}
                className="group mt-10 inline-flex items-center justify-center rounded-full bg-violet-600 px-8 py-4 font-extrabold text-white shadow-xl shadow-violet-600/20 transition hover:bg-slate-950"
              >
                Start Assessment
                <ArrowRight
                  className="ml-2 transition group-hover:translate-x-1"
                  size={18}
                />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-5 py-10 lg:px-8">
      <section className="mx-auto flex min-h-[90vh] max-w-4xl items-center justify-center">
        <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-violet-600/10">
          <ProgressBar current={currentStep + 1} total={totalSteps} />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
              className="mt-10"
            >
              <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-slate-950">
                {currentQuestion.title}
              </h1>

              {currentQuestion.description && (
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {currentQuestion.description}
                </p>
              )}

              {currentQuestion.type === "text" && (
                <input
                  type="text"
                  value={(currentAnswer as string) ?? ""}
                  onChange={(event) => updateAnswer(event.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className="mt-8 w-full rounded-2xl border border-slate-200 px-5 py-4 text-lg outline-none transition focus:border-violet-500"
                />
              )}

              {(currentQuestion.type === "select" ||
                currentQuestion.type === "multi-select") && (
                <div className="mt-8 grid gap-3 md:grid-cols-2">
                  {currentQuestion.options?.map((option) => {
                    const selected = Array.isArray(currentAnswer)
                      ? currentAnswer.includes(option)
                      : currentAnswer === option;

                    return (
                      <button
                        key={option}
                        onClick={() => updateAnswer(option)}
                        className={`rounded-2xl border px-5 py-4 text-left font-bold transition ${
                          selected
                            ? "border-violet-600 bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                            : "border-slate-200 bg-white text-slate-700 hover:border-violet-300 hover:bg-violet-50"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={previousStep}
              disabled={currentStep === 0}
              className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3 font-extrabold text-slate-700 transition hover:border-violet-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft className="mr-2" size={18} />
              Previous
            </button>

            <button
              onClick={nextStep}
              disabled={!hasAnswer}
              className="inline-flex items-center rounded-full bg-violet-600 px-7 py-4 font-extrabold text-white transition hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isLastStep ? "Generate Roadmap" : "Continue"}
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}