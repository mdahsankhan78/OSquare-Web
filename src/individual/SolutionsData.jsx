import { Shield, Lightbulb, Zap } from "lucide-react";

export const tab1Features = [
  {
    id: "accordion-1",
    icon: Shield,
    title: "Manage Like a Pro",
    description:
      "Oversee data, keep records, and discover innovations with tools crafted to safeguard your digital world.",
    expanded: true,
    highlighted: true,
  },
  {
    id: "accordion-2",
    icon: Lightbulb,
    title: "Execute Ideas with Ease",
    description:
      "Effortlessly transform your concepts into reality, translating vision into action through smooth execution and imagination.",
    expanded: false,
    highlighted: false,
  },
  {
    id: "accordion-3",
    icon: Zap,
    title: "Ensure Accessibility",
    description:
      "Streamline workflows and eliminate obstacles, guaranteeing that resources and opportunities are readily available to all, everywhere.",
    expanded: false,
    highlighted: false,
  },
];

export const tab1Images = {
    "accordion-1": "/individual/solutions1.png",
    "accordion-2": "/individual/solutions2.png",
    "accordion-3": "/individual/solutions3.png",
};