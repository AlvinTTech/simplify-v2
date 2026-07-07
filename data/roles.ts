export type UserRole =
  | "ceo"
  | "sales"
  | "operations"
  | "marketing"
  | "finance"
  | "education"
  | "ngo";

export const roles = [
  {
    id: "ceo",
    label: "CEO",
    headline: "Build a business that runs beyond working hours.",
    description:
      "See your entire business operate through intelligent workflows that reduce manual work and improve visibility.",
    problemTitle: "Your business is not slow. Your systems are.",
    problemDescription:
      "Growth becomes harder when every decision, update and follow-up depends on people doing manual work.",
    solutionFocus: "We connect leadership visibility, customer follow-up, reporting and team coordination into one intelligent operating layer.",
    workflowTitle: "Executive workflow",
    workflowSubtitle: "From enquiry to business visibility",
    steps: [
      "New enquiry received",
      "Lead qualified",
      "CRM updated",
      "Proposal generated",
      "Meeting booked",
      "Dashboard updated",
    ],
    outcomes: [
      {
        label: "Visibility",
        title: "Know what is happening without chasing updates.",
        before: "Important business updates were scattered across people, tools and conversations.",
        after: "Key activity is captured, updated and reported automatically.",
      },
      {
        label: "Growth",
        title: "Scale without adding unnecessary admin.",
        before: "Growth created more manual work for the team.",
        after: "Systems handle repetitive tasks while people focus on strategy and customers.",
      },
      {
        label: "Control",
        title: "Run the business with fewer blind spots.",
        before: "Decisions depended on delayed reports and manual follow-ups.",
        after: "Connected workflows give leadership faster visibility and better control.",
      },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    headline: "Close more deals without hiring more salespeople.",
    description:
      "AI qualifies leads, follows up instantly and keeps your pipeline moving automatically.",
    problemTitle: "Your leads are not the problem. Your follow-up system is.",
    problemDescription:
      "Sales teams lose opportunities when lead capture, follow-up, CRM updates and reporting depend on manual tracking.",
    workflowTitle: "Sales workflow",
    solutionFocus: "We build AI workflows that qualify leads, trigger follow-ups, update your CRM and keep sales opportunities moving.",
    workflowSubtitle: "From lead capture to booked meeting",
    steps: [
      "Lead captured",
      "Lead scored",
      "CRM updated",
      "Follow-up sent",
      "Meeting booked",
      "Sales report updated",
    ],
    outcomes: [
      {
        label: "Speed",
        title: "Every lead gets a response.",
        before: "Leads came in from multiple channels and follow-up depended on manual tracking.",
        after: "AI qualifies, responds, updates the CRM and books meetings automatically.",
      },
      {
        label: "Pipeline",
        title: "Your sales pipeline stays clean.",
        before: "CRM updates were often delayed or forgotten.",
        after: "Lead status, notes and next steps update automatically.",
      },
      {
        label: "Conversion",
        title: "More consistent follow-up.",
        before: "Sales opportunities went cold when teams got busy.",
        after: "Follow-ups are triggered automatically based on lead stage.",
      },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    headline: "Remove bottlenecks across your business.",
    description:
      "Automate repetitive tasks and coordinate your entire operation from one intelligent system.",
    problemTitle: "Your team is working hard. Your workflows are working against them.",
    problemDescription:
      "Operations slow down when task assignment, reminders, updates and reporting happen across disconnected tools.",
    workflowTitle: "Operations workflow",
    solutionFocus: "We automate task assignment, reminders, team updates and operational reporting so work moves without constant chasing.",
    workflowSubtitle: "From task request to team update",
    steps: [
      "Task created",
      "Owner assigned",
      "Reminder scheduled",
      "Status updated",
      "Manager notified",
      "Report generated",
    ],
    outcomes: [
      {
        label: "Coordination",
        title: "Less chasing. More execution.",
        before: "Managers spent time reminding people and checking progress manually.",
        after: "Tasks, reminders and updates move automatically across the team.",
      },
      {
        label: "Clarity",
        title: "Everyone knows the next step.",
        before: "Work got stuck because responsibilities and deadlines were unclear.",
        after: "AI-assisted workflows assign, remind and escalate tasks.",
      },
      {
        label: "Reporting",
        title: "Operational updates become automatic.",
        before: "Reports were prepared manually at the end of the day or week.",
        after: "Progress updates are captured and summarized as work happens.",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    solutionFocus: "We help marketing teams create, schedule, track and report campaigns with fewer manual steps.",
    headline: "Create campaigns while AI handles execution.",
    description:
      "Generate content, schedule campaigns and monitor performance automatically.",
    problemTitle: "Your ideas move faster than your execution.",
    problemDescription:
      "Marketing teams lose momentum when content creation, approvals, scheduling and reporting are handled manually.",
    workflowTitle: "Marketing workflow",
    workflowSubtitle: "From idea to campaign report",
    steps: [
      "Campaign brief created",
      "Content drafted",
      "Post scheduled",
      "Audience segmented",
      "Performance tracked",
      "Report generated",
    ],
    outcomes: [
      {
        label: "Consistency",
        title: "Campaigns move faster.",
        before: "Content ideas stayed stuck in planning and approval stages.",
        after: "AI helps draft, schedule and track campaigns faster.",
      },
      {
        label: "Execution",
        title: "Less manual scheduling.",
        before: "Posting, tracking and reporting took too much time.",
        after: "Campaign tasks are automated from creation to performance summary.",
      },
      {
        label: "Insight",
        title: "Reports become easier to act on.",
        before: "Performance data lived across different platforms.",
        after: "AI summarizes campaign performance into clear next steps.",
      },
    ],
  },
  {
    id: "finance",
    solutionFocus: "We automate invoicing, payment reminders, record updates and finance summaries across your tools.",
    label: "Finance",
    headline: "Spend less time processing paperwork.",
    description:
      "Generate invoices, reconcile payments and produce reports automatically.",
    problemTitle: "Finance should not be trapped in repetitive admin.",
    problemDescription:
      "Invoices, payment reminders, reconciliations and reports become bottlenecks when every step needs manual attention.",
    workflowTitle: "Finance workflow",
    workflowSubtitle: "From invoice to payment follow-up",
    steps: [
      "Invoice generated",
      "Client notified",
      "Payment tracked",
      "Reminder sent",
      "Records updated",
      "Summary prepared",
    ],
    outcomes: [
      {
        label: "Payments",
        title: "Payment follow-up becomes consistent.",
        before: "Payment reminders depended on someone checking records manually.",
        after: "Reminders are triggered automatically based on payment status.",
      },
      {
        label: "Accuracy",
        title: "Records stay updated.",
        before: "Manual entry created delays and errors.",
        after: "Invoices, payments and summaries update through connected workflows.",
      },
      {
        label: "Reporting",
        title: "Finance summaries become faster.",
        before: "Reports required pulling data from multiple places.",
        after: "AI prepares summaries from connected financial records.",
      },
    ],
  },
  {
    id: "education",
    solutionFocus: "We simplify admissions, parent communication, student records, reminders and school administration.",
    label: "Education",
    headline: "Give teachers more time to teach.",
    description:
      "Automate admissions, attendance, parent communication and administrative work.",
    problemTitle: "Schools should not lose time to admin overload.",
    problemDescription:
      "Admissions, parent updates, attendance, reminders and student records can overwhelm teams when systems are disconnected.",
    workflowTitle: "Education workflow",
    workflowSubtitle: "From admission enquiry to parent update",
    steps: [
      "Admission enquiry received",
      "Parent contacted",
      "Student record created",
      "Assessment booked",
      "Reminder sent",
      "Admin report updated",
    ],
    outcomes: [
      {
        label: "Admissions",
        title: "Admission enquiries get handled faster.",
        before: "Parents waited for manual responses and follow-ups.",
        after: "Enquiries, reminders and assessment bookings are automated.",
      },
      {
        label: "Communication",
        title: "Parents stay informed.",
        before: "Updates were sent manually across different channels.",
        after: "Parent communication becomes structured, timely and consistent.",
      },
      {
        label: "Admin",
        title: "Administrative work reduces.",
        before: "Staff spent hours updating records and sending reminders.",
        after: "Records, reminders and reports update through connected systems.",
      },
    ],
  },
  {
    id: "ngo",
    solutionFocus: "We connect programme data, donor updates, grant tracking and impact reporting into smoother workflows.",
    label: "NGO",
    headline: "Focus on impact instead of administration.",
    description:
      "Automate donor communication, reporting, grants and programme management.",
    problemTitle: "Impact work should not be slowed down by paperwork.",
    problemDescription:
      "NGOs lose valuable time when programme updates, donor reports, grant tracking and communication happen manually.",
    workflowTitle: "NGO workflow",
    workflowSubtitle: "From programme update to donor report",
    steps: [
      "Programme data collected",
      "Impact summary drafted",
      "Donor update prepared",
      "Grant tracker updated",
      "Team notified",
      "Report generated",
    ],
    outcomes: [
      {
        label: "Reporting",
        title: "Impact reports become easier.",
        before: "Teams spent too much time collecting and formatting programme updates.",
        after: "AI helps turn programme data into donor-ready summaries.",
      },
      {
        label: "Donors",
        title: "Donor communication stays consistent.",
        before: "Updates were delayed because teams were busy with programme work.",
        after: "Donor updates can be drafted and sent through structured workflows.",
      },
      {
        label: "Grants",
        title: "Grant tracking becomes clearer.",
        before: "Deadlines, requirements and updates were tracked manually.",
        after: "Grant trackers, reminders and reports stay connected.",
      },
    ],
  },
] as const;