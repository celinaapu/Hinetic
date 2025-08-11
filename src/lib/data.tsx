// lib/data.ts
import { Job, Application, NavigationItem, CategoryData } from "./types";


export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Job List", href: "#jobs" },
  { label: "Pages", href: "#pages" },
  { label: "Contact Us", href: "#contact" },
];

export const JOB_CATEGORIES: CategoryData[] = [
  { name: "HEALTHCARE" },
  { name: "FINANCE" },
  { name: "EDUCATION" },
  { name: "ENGINEERING" },
  { name: "SALES" },
  { name: "CUSTOMER SERVICE" },
  { name: "MARKETING" },
  { name: "HUMAN RESOURCES" },
  { name: "HOSPITALITY" },
  { name: "ADMINISTRATION" },
  { name: "RETAIL" },
];

export const STATISTICS = [
  { number: "1300+", label: "Job Available" },
  { number: "300+", label: "Top Companies" },
  { number: "3000+", label: "Candidate Hired" },
];

export const sampleJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "Lagos, Nigeria",
    type: "full-time",
    salary: "₦2,500,000 - ₦3,500,000",
    postedDate: "2025-07-20",
    applications: 24,
    status: "active",
    description:
      "We are looking for a skilled Frontend Developer to join our team...",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    experience: "senior",
  },
  {
    id: "2",
    title: "Product Manager",
    company: "InnovateLab",
    location: "Abuja, Nigeria",
    type: "full-time",
    salary: "₦3,000,000 - ₦4,200,000",
    postedDate: "2025-07-18",
    applications: 18,
    status: "active",
    description:
      "Lead product strategy and development for our flagship products...",
    skills: ["Product Strategy", "Analytics", "User Research", "Agile"],
    experience: "mid",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    company: "DesignStudio",
    location: "Remote",
    type: "contract",
    salary: "₦1,800,000 - ₦2,400,000",
    postedDate: "2025-07-15",
    applications: 31,
    status: "paused",
    description: "Create beautiful and intuitive user experiences...",
    skills: ["Figma", "Sketch", "Prototyping", "User Research"],
    experience: "mid",
  },
];

export const sampleApplications: Application[] = [
  {
    id: "1",
    jobId: "job-1",
    jobTitle: "Senior React Developer",
    company: "StartupXYZ",
    appliedDate: "2025-07-22",
    status: "interview",
    salary: "₦2,800,000",
    location: "Lagos, Nigeria",
  },
  {
    id: "2",
    jobId: "job-2",
    jobTitle: "Full Stack Engineer",
    company: "TechFlow",
    appliedDate: "2025-07-20",
    status: "reviewed",
    salary: "₦3,200,000",
    location: "Abuja, Nigeria",
  },
  {
    id: "3",
    jobId: "job-3",
    jobTitle: "Frontend Lead",
    company: "DevCorp",
    appliedDate: "2025-07-18",
    status: "pending",
    salary: "₦4,000,000",
    location: "Remote",
  },
];

export const clientStats = {
  activeJobs: 12,
  totalApplications: 186,
  profileViews: 2847,
  hireRate: 23,
};

export const applicantStats = {
  applicationsSent: 28,
  profileViews: 134,
  interviews: 3,
  successRate: 18,
};
