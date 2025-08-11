import { LucideIcon } from "lucide-react";

// lib/types.ts
export interface NavigationItem {
  label: string;
  href: string;
}

export interface JobCardProps {
  icon: LucideIcon; 
  iconBgColor: string; // Tailwind background color class
  jobType: string; // "Full-time", "Contract", "Part-time", etc.
  title: string; // Job title
  company: string; // Company name
  location: string; // Job location
  salary: string; // Salary range
  postedTime: string; // When the job was posted
  onApply?: () => void; // Optional callback for apply button
}

export interface StatData {
  number: string;
  label: string;
}

export interface CategoryData {
  name: string;
  count?: number;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "freelance" | "internship";
  salary: string;
  postedDate: string;
  applications: number;
  status: "active" | "paused" | "closed";
  description?: string;
  skills?: string[];
  experience?: "entry" | "mid" | "senior" | "lead";
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  appliedDate: string;
  status: "pending" | "reviewed" | "interview" | "rejected" | "accepted";
  salary: string;
  location?: string;
}

export interface JobFormData {
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  experience?: string;
  description: string;
  skills?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: "client" | "applicant";
  avatar?: string;
}

export interface Stats {
  activeJobs?: number;
  totalApplications?: number;
  profileViews?: number;
  hireRate?: number;
  applicationsSent?: number;
  interviews?: number;
  successRate?: number;
}
