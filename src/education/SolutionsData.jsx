import { Shield, Lightbulb, Zap } from "lucide-react";

export const tab1Features = [
  {
    id: "accordion-1",
    icon: Shield,
    title: "Accelerate Learning Progress",
    description:
      "Empower students with tools that provide real-time feedback, enabling educators to track performance and personalize teaching strategies.",
    expanded: true,
    highlighted: true,
  },
  {
    id: "accordion-2",
    icon: Lightbulb,
    title: "Prepare for Tomorrow",
    description:
      "Equip students and educators with advanced solutions like iSchool, Learning Management Systems, and Smart Attendance tools to develop skills essential for the future.",
    expanded: false,
    highlighted: false,
  },
  {
    id: "accordion-3",
    icon: Zap,
    title: "Inclusive Learning for Everyone",
    description:
      "Foster an equitable environment where learners and educators can access tools designed to ensure fair and inclusive opportunities for all.",
    expanded: false,
    highlighted: false,
  },
  {
    id: "accordion-4",
    icon: Shield,
    title: "Enable Secure and Adaptive Learning",
    description:
      "Streamline technology management while maintaining a safe, adaptable learning environment for classrooms and districts alike.",
    expanded: false,
    highlighted: false,
  },
];

export const tab1Images = {
    "accordion-1": "/education/solutions1.png",
    "accordion-2": "/education/solutions2.png",
    "accordion-4": "/education/solutions3.png",
    "accordion-3": "/education/solutions4.png",
};