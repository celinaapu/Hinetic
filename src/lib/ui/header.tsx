"use client";

import React from "react";
import { HineticLogo } from "./Logo";

interface NavigationProps {
  navigationItems: Array<{ label: string; href: string }>;
}

const Navigation: React.FC<NavigationProps> = ({ navigationItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <nav className="bg-[#0a0a23] shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-10 h-10 ">
              <HineticLogo />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-[#e0ff66] transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <button className="bg-[#9e8cf0] hover:bg-[#c2b4f2] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              GET STARTED
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#e0ff66] transition-colors duration-300"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0a0a23] border-t border-[#141328] shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-[#e0ff66] transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full text-left bg-[#9e8cf0] hover:bg-[#c2b4f2] text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 mt-2">
                GET STARTED
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
