// app/client/layout.tsx
"use client";

import { Sidebar } from "@/lib/ui/sidebar";

// import { Sidebar } from "@/components/ui/Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userType="client" />
      {children}
    </div>
  );
}
