type Answers = Record<string, string | string[]>;

export function calculateAssessmentResult(answers: Answers) {
  const employees = answers.employees as string;
  const challenge = answers.challenge as string;
  const tools = Array.isArray(answers.tools) ? answers.tools : [];
  const goal = answers.goal as string;

  let score = 55;

  if (employees === "21–50") score += 8;
  if (employees === "51–200") score += 12;
  if (employees === "200+") score += 15;

  if (tools.length >= 3) score += 10;
  if (tools.includes("WhatsApp")) score += 5;
  if (tools.includes("HubSpot") || tools.includes("Zoho CRM")) score += 6;
  if (tools.includes("Excel / Google Sheets")) score += 4;

  if (challenge === "Manual follow-ups") score += 8;
  if (challenge === "Reporting") score += 8;
  if (challenge === "Customer support") score += 7;
  if (challenge === "Admin work") score += 7;

  if (goal === "Scale operations") score += 8;
  if (goal === "Save time") score += 7;
  if (goal === "Increase sales") score += 7;

  score = Math.min(score, 96);

  const estimatedHours = score >= 85 ? 18 : score >= 75 ? 12 : 8;

  const recommendedSystems = [
    "AI Workflow Automation",
    "CRM / Tool Integration",
    "Automated Follow-up System",
    "Reporting Assistant",
  ];

  if (challenge === "Customer support") {
    recommendedSystems.unshift("Customer Support AI Agent");
  }

  if (challenge === "Manual follow-ups") {
    recommendedSystems.unshift("Sales Follow-up Automation");
  }

  if (challenge === "Reporting") {
    recommendedSystems.unshift("Executive Reporting Dashboard");
  }

  return {
    score,
    estimatedHours,
    firstBuild: recommendedSystems[0],
    recommendedSystems: [...new Set(recommendedSystems)].slice(0, 4),
  };
}