import { LucideIcon } from "lucide-react";

export type Profile = {
  name: string,
  sureName: string,
  avatar: string,
  address: string,
  statusOne: string,
  statusTwo: string,
  description: string,
  socials: {
    label: string;
    href: string;
    icon: LucideIcon;
  }[];
  skills: Stack[];
}

export type TechnologyStack = 
  | "React JS"
  | "Next JS"
  | "Svelte JS"
  | "Vue JS"
  | "JavaScript"
  | "TypeScript"
  | "Bootstrap"
  | "Tailwind CSS"
  | "CSS3"
  | "HTML5"
  | "Vite"
  | "Firebase"
  | "Zustand"
  | "Redux"
  | "Axios"
  | "Postman"
  | "Zod"
  | "Vuelidate"
  | "Shadcn UI"
  | "React Hook Form"
;

export type Stack = {
  label: TechnologyStack,
  imageUrl: string,
}

export type Education = {
  logoUrl: string;
  schoolLabel: string;
  schoolFullName: string;
  address: string;
  level: string | null;
  major: string | null;
  fromYear: number;
  endYear: number;
  score: number;
  scoreMax: number;
};

export type Work = {
  logoUrl?: string;
  role: string;
  companyLabel: string;
  companyFullName: string;
  address: string;
  fromDate: Date;
  endDate?: Date;
  workMode: 'Full-time' | 'Part-time' | 'Freelance';
  workType: 'Remote' | 'Hybrid' | 'On-site';
  responsibilities: string[];
};