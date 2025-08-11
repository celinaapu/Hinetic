// app/applicant/layout.tsx
"use client";

import { Sidebar } from "@/lib/ui/sidebar";


export default function ApplicantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userType="applicant" />
      {children}
    </div>
  );
}
