import { supabaseAdmin } from "@/lib/supabase/admin";
import { calculateAssessmentResult } from "@/lib/assessment-score";
import { findOrCreateOrganization } from "@/lib/services/organizationService";

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

  const organization = await findOrCreateOrganization({
    name: lead.company,
    industry: answers.industry,
    employees: answers.employees,
  });

  const { data: assessment, error: assessmentError } = await supabaseAdmin
    .from("assessments")
    .insert({
      organization_id: organization.id,
      contact_name: lead.name,
      contact_email: lead.email,
      contact_phone: lead.phone,
      challenge: answers.challenge || null,
      goal: answers.goal || null,
      score: result.score,
      estimated_hours: result.estimatedHours,
      status: "New",
    })
    .select()
    .single();

  if (assessmentError) throw assessmentError;

  const answerRows = Object.entries(answers).map(([questionId, answer]) => ({
    assessment_id: assessment.id,
    question_id: questionId,
    answer,
  }));

  const { error: answersError } = await supabaseAdmin
    .from("assessment_answers")
    .insert(answerRows);

  if (answersError) throw answersError;

  const { data: roadmap, error: roadmapError } = await supabaseAdmin
    .from("roadmaps")
    .insert({
      assessment_id: assessment.id,
      first_build: result.firstBuild,
      recommendations: result.recommendedSystems,
      implementation_plan: [
        {
          phase: "Phase 1",
          title: "Audit & Map",
          text: "Review workflows, tools, repetitive tasks, and highest-impact automation opportunities.",
        },
        {
          phase: "Phase 2",
          title: "Build & Connect",
          text: "Create the first automation layer and connect it to the tools already in use.",
        },
        {
          phase: "Phase 3",
          title: "Launch & Improve",
          text: "Test with the team, refine the workflow, and expand into the next automation opportunity.",
        },
      ],
    })
    .select()
    .single();

  if (roadmapError) throw roadmapError;

  return {
    organization,
    assessment,
    roadmap,
    result,
  };
}