import { db } from "@/lib/db";
import { calculateAssessmentResult } from "@/lib/assessment-score";

type Lead = {
  name: string;
  email: string;
  phone: string;
  company: string;
};

type Answers = Record<string, string | string[]>;

export async function saveAssessment({
  lead,
  answers,
}: {
  lead: Lead;
  answers: Answers;
}) {
  const result = calculateAssessmentResult(answers);

  await db.execute(
    `
    INSERT INTO assessments (
      name,
      email,
      phone,
      company,
      industry,
      employees,
      challenge,
      goal,
      answers,
      score,
      estimated_hours
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      lead.name,
      lead.email,
      lead.phone,
      lead.company,
      answers.industry || null,
      answers.employees || null,
      answers.challenge || null,
      answers.goal || null,
      JSON.stringify(answers),
      result.score,
      result.estimatedHours,
    ]
  );

  return result;
}