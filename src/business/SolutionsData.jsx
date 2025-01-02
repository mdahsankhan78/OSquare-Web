import { Shield, Lightbulb, Zap } from "lucide-react";

export const tab1Features = [
  {
    id: "accordion-1",
    icon: Shield,
    title: "Expand your Customer Base",
    description:
      "Engage with new customers using powerful tools that enhance communication and deliver greater value.",
    expanded: true,
    highlighted: true,
  },
  {
    id: "accordion-2",
    icon: Lightbulb,
    title: "Strengthen your Brand",
    description:
      "Create a powerful market presence with custom documents, branded meeting backgrounds, marketing videos, and tailored emails.",
    expanded: false,
    highlighted: false,
  },
  {
    id: "accordion-3",
    icon: Zap,
    title: "Manage your business",
    description:
      "Streamline operations with a solution that lets you create, connect, and collaborate securely from anywhere.",
    expanded: false,
    highlighted: false,
  },
  {
    id: "accordion-4",
    icon: Shield,
    title: "Scale with confidence",
    description:
      "Protect your business data and devices with unified identity, security, compliance, and privacy safeguards.",
    expanded: false,
    highlighted: false,
  },
];

export const tab1Images = {
    "accordion-1": "/business/solutions1.png",
    "accordion-3": "/business/solutions2.png",
    "accordion-4": "/business/solutions3.png",
    "accordion-2": "/business/solutions4.png",
};