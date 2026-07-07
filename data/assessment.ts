export type AssessmentQuestion = {
  id: string;
  title: string;
  description?: string;
  type: "text" | "select" | "multi-select";
  placeholder?: string;
  options?: string[];
};

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "company",
    title: "What is your company name?",
    description: "This helps us personalize your AI roadmap.",
    type: "text",
    placeholder: "Example: Simplify",
  },
  {
    id: "industry",
    title: "Which industry best describes your business?",
    description: "Different industries have different automation opportunities.",
    type: "select",
    options: [
      "Education",
      "NGO",
      "Retail",
      "Healthcare",
      "Professional Services",
      "Hospitality",
      "Construction",
      "Manufacturing",
      "Other",
    ],
  },
  {
    id: "employees",
    title: "How many people work in your business?",
    description: "This helps estimate the scale of possible automation.",
    type: "select",
    options: ["1–5", "6–20", "21–50", "51–200", "200+"],
  },
  {
    id: "challenge",
    title: "What wastes the most time right now?",
    description: "Choose the area where your team feels the most pressure.",
    type: "select",
    options: [
      "Manual follow-ups",
      "Customer support",
      "Data entry",
      "Reporting",
      "Scheduling",
      "Internal communication",
      "Admin work",
    ],
  },
  {
    id: "tools",
    title: "Which tools do you currently use?",
    description: "Select all that apply.",
    type: "multi-select",
    options: [
      "WhatsApp",
      "Google Workspace",
      "Microsoft 365",
      "HubSpot",
      "Zoho CRM",
      "Excel / Google Sheets",
      "Notion",
      "Monday.com",
      "QuickBooks",
      "Slack",
    ],
  },
  {
    id: "goal",
    title: "What is your biggest goal with AI?",
    description: "This helps us recommend the right first system.",
    type: "select",
    options: [
      "Save time",
      "Increase sales",
      "Improve customer experience",
      "Reduce costs",
      "Improve reporting",
      "Scale operations",
    ],
  },
];