import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  category: "Security" | "Networking" | "Infrastructure" | "Maintenance";
  description: string;
  image: string;
  icon: LucideIcon;
  benefits: string[];
  features: string[];
  process: string[];
  applications: string[];
  equipment: string[];
  faqs: { question: string; answer: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
};
