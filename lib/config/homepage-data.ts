import {
  AlertCircle,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  CalendarCheck,
  Clock,
  DatabaseZap,
  FileText,
  GraduationCap,
  Headphones,
  HeartPulse,
  Landmark,
  MailCheck,
  MessageSquareWarning,
  Network,
  ReceiptText,
  Repeat,
  ShoppingBag,
  Truck,
  UsersRound,
  Workflow,
} from "lucide-react";

export const problems = [
  {
    icon: MessageSquareWarning,
    title: "Leads fall through",
    text: "Enquiries come in from WhatsApp, forms, email and social media — but follow-up depends on someone remembering.",
  },
  {
    icon: Repeat,
    title: "Teams repeat work",
    text: "Your staff spend hours copying data, sending updates, preparing reports and chasing tasks manually.",
  },
  {
    icon: DatabaseZap,
    title: "Tools do not talk",
    text: "Your CRM, inbox, calendar, website and spreadsheets operate separately, slowing down execution.",
  },
  {
    icon: Clock,
    title: "Response times are slow",
    text: "Customers wait too long because simple questions and next steps still need human attention.",
  },
  {
    icon: FileText,
    title: "Reports take too long",
    text: "Managers struggle to get accurate, timely information because reporting is still manual.",
  },
  {
    icon: AlertCircle,
    title: "Growth creates chaos",
    text: "As the business grows, the old way of working creates bottlenecks, delays and unnecessary pressure.",
  },
];

export const solutions = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    outcome: "No more repetitive busywork.",
    text: "We automate follow-ups, reporting, reminders, task updates, data entry and internal approvals so your team can focus on high-value work.",
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    outcome: "AI that actually completes tasks.",
    text: "We help you create AI agents that use integrations to read, decide, trigger actions and update your tools automatically.",
  },
  {
    icon: Network,
    title: "System Integration",
    outcome: "Every tool finally works together.",
    text: "We connect CRMs, websites, forms, inboxes, calendars, spreadsheets and dashboards into one smooth operating system.",
  },
  {
    icon: BrainCircuit,
    title: "AI Strategy & Onboarding",
    outcome: "Know exactly where AI fits.",
    text: "We map your operations, identify automation opportunities, build a clear roadmap and guide your team through adoption.",
  },
];

export const agents = [
  {
    icon: UsersRound,
    title: "Sales Agent",
    text: "Qualifies leads, updates your CRM, follows up automatically and keeps opportunities moving.",
  },
  {
    icon: Headphones,
    title: "Customer Support Agent",
    text: "Answers common questions, routes complex issues and gives customers faster responses.",
  },
  {
    icon: ReceiptText,
    title: "Finance Agent",
    text: "Generates invoices, sends reminders, tracks payments and prepares financial summaries.",
  },
  {
    icon: MailCheck,
    title: "Marketing Agent",
    text: "Drafts campaign content, schedules updates and tracks performance across channels.",
  },
  {
    icon: CalendarCheck,
    title: "Operations Agent",
    text: "Coordinates tasks, updates teams, manages reminders and keeps daily workflows running.",
  },
  {
    icon: BarChart3,
    title: "Reporting Agent",
    text: "Pulls data from your tools and turns it into clear reports for faster decision-making.",
  },
];

export const industries = [
  {
    icon: Truck,
    title: "Logistics",
    text: "Automate delivery updates, customer communication, dispatch tracking and operational reporting.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Simplify admissions, parent communication, student records, reminders and administrative workflows.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    text: "Automate order updates, inventory alerts, customer support, follow-ups and sales reporting.",
  },
  {
    icon: Building2,
    title: "Professional Services",
    text: "Streamline client onboarding, proposals, scheduling, document creation and internal task tracking.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    text: "Improve appointment reminders, patient follow-ups, internal coordination and reporting workflows.",
  },
  {
    icon: Landmark,
    title: "NGOs & Organizations",
    text: "Automate donor updates, impact reporting, grant tracking, program records and stakeholder communication.",
  },
];