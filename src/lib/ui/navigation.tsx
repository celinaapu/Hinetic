"use client";

import { useUserStore } from "@/stores/userStore";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { HineticLogo } from "./Logo";

interface NavigationItem {
  title?: string;
  label: string;
  href: string;
}

interface NavigationProps {
  navigationItems: NavigationItem[];
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  navigationItems,
  title,
  subtitle,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated } = useUserStore();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleGetStarted = () => {
    setMobileMenuOpen(false);
    router.push("/auth/register");
  };

  const handleProfile = () => {
    setMobileMenuOpen(false);
    router.push("/profile");
  };

  const handleMobileItemClick = () => setMobileMenuOpen(false);

  const isAuthPage =
    pathname?.startsWith("/auth/login") ||
    pathname?.startsWith("/auth/register");

  const isHomePage = pathname === "/";

  return (
    <nav className="bg-[#0a0a23] w-full shadow-lg relative z-[60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo + Title */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex-shrink-0">
              <HineticLogo />
            </div>
            {(title || subtitle) && (
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-white">{title}</h1>
                {subtitle && (
                  <p className="text-sm text-gray-400">{subtitle}</p>
                )}
              </div>
            )}
          </div>

          {/* Middle: Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => router.push(item.href)}
                className="text-white hover:text-[#e0ff66] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right: GET STARTED / Profile / Animated Emoji */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthPage ? (
              <div className="flex items-center gap-2">
                <motion.span
                  className="text-2xl"
                  animate={{ y: [0, -5, 0], scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  😊
                </motion.span>
                <span className="text-sm text-red-500 font-medium">
                  Setting up profile...
                </span>
              </div>
            ) : isAuthenticated && user ? (
              <div
                onClick={handleProfile}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-500">
                  <Image
                    src={user.avatar || "https://i.pravatar.cc/100?img=5"}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-white font-medium hidden md:inline">
                  {user.name}
                </span>
              </div>
            ) : isHomePage ? (
              <button
                onClick={handleGetStarted}
                className="bg-[#9e8cf0] hover:bg-[#c2b4f2] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                GET STARTED
              </button>
            ) : null}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#e0ff66] transition-colors duration-300 p-2"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0a0a23] border-t border-[#141328] shadow-xl animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    router.push(item.href);
                    handleMobileItemClick();
                  }}
                  className="block w-full text-left px-3 py-2 text-white hover:text-[#e0ff66] transition-colors duration-300 rounded-md hover:bg-[#141328]"
                >
                  {item.label}
                </button>
              ))}

              {isAuthPage ? (
                <div className="flex items-center gap-2 px-3 py-2">
                  <motion.span
                    className="text-2xl"
                    animate={{ y: [0, -5, 0], scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    😊
                  </motion.span>
                  <span className="text-sm text-red-500 font-medium">
                    Setting up profile...
                  </span>
                </div>
              ) : isAuthenticated && user ? (
                <button
                  onClick={handleProfile}
                  className="w-full text-center bg-[#6b7280] hover:bg-[#4b5563] text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 mt-2"
                >
                  Profile
                </button>
              ) : isHomePage ? (
                <button
                  onClick={handleGetStarted}
                  className="w-full text-center bg-[#9e8cf0] hover:bg-[#c2b4f2] text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 mt-2"
                >
                  GET STARTED
                </button>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
