// components/ui/Sidebar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  Briefcase,
  Plus,
  Search,
  Settings,
  User,
  FileText,
  TrendingUp,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { HineticLogo } from "./Logo";

interface SidebarProps {
  userType: "client" | "applicant";
  onSwitchView?: () => void;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
}

export const Sidebar: React.FC<SidebarProps> = ({ userType, onSwitchView }) => {
  const pathname = usePathname();

  const clientNavItems: NavItem[] = [
    { name: "Dashboard", href: "/client/dashboard", icon: Briefcase },
    { name: "Post Job", href: "/client/jobs/new", icon: Plus },
    { name: "Applications", href: "/client/applications", icon: Users },
    { name: "Analytics", href: "/client/analytics", icon: TrendingUp },
  ];

  const applicantNavItems: NavItem[] = [
    { name: "Dashboard", href: "/applicant/dashboard", icon: Activity },
    { name: "Find Jobs", href: "/applicant/jobs", icon: Search },
    {
      name: "My Applications",
      href: "/applicant/applications",
      icon: FileText,
    },
    { name: "Profile", href: "/applicant/profile", icon: User },
  ];

  const navItems = userType === "client" ? clientNavItems : applicantNavItems;

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <HineticLogo />
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:bg-gray-50"
                )}
              >
                <item.icon size={20} />
                <span className={isActive ? "font-medium" : ""}>
                  {item.name}
                </span>
              </Link>
            );
          })}

          <Link
            href="/settings"
            className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </div>
      </nav>

      {onSwitchView && (
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onSwitchView}
            className="w-full px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all"
          >
            Switch to {userType === "client" ? "Applicant" : "Client"} View
          </button>
        </div>
      )}
    </div>
  );
};
