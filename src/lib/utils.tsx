
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800";
    case "paused":
      return "bg-yellow-100 text-yellow-800";
    case "closed":
      return "bg-gray-100 text-gray-800";
    case "pending":
      return "bg-blue-100 text-blue-800";
    case "reviewed":
      return "bg-purple-100 text-purple-800";
    case "interview":
      return "bg-orange-100 text-orange-800";
    case "rejected":
      return "bg-red-100 text-red-800";
    case "accepted":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const formatSalary = (salary: string): string => {
  return salary.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
