export interface NavItem {
  href: string;
  label: string;
  description: string;
  icon: string;
}

export const mainNavItems: NavItem[] = [
  {
    href: "/",
    label: "Dashboard",
    description: "Your summer study home base",
    icon: "🏠",
  },
  {
    href: "/curriculum",
    label: "Curriculum",
    description: "Full course overview",
    icon: "📚",
  },
  {
    href: "/daily-lesson",
    label: "Daily Lesson",
    description: "Today's geometry focus",
    icon: "📐",
  },
  {
    href: "/practice",
    label: "Practice",
    description: "Interactive skill drills",
    icon: "✏️",
  },
  {
    href: "/worksheets",
    label: "Worksheets",
    description: "Printable practice sets",
    icon: "📄",
  },
  {
    href: "/answer-keys",
    label: "Answer Keys",
    description: "Check your work",
    icon: "🔑",
  },
  {
    href: "/progress",
    label: "Progress Tracker",
    description: "See how you're doing",
    icon: "📊",
  },
  {
    href: "/error-review",
    label: "Error Review",
    description: "Revisit missed problems",
    icon: "🔍",
  },
  {
    href: "/parent-dashboard",
    label: "Parent Dashboard",
    description: "Overview for parents",
    icon: "👪",
  },
];
