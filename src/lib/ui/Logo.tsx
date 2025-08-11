"use client";

import React from "react";
import Link from "next/link";

export const HineticLogo: React.FC = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center space-x-2"
      aria-label="Hinetic Home"
    >
      <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 rounded-full flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
          10-4.48 10-10S17.52 2 12 2zm1.5 17h-3v-6h-2v-2h5v8zm1-10.75c-.69 0-1.25-.56-1.25-1.25S13.81 5.5 14.5 5.5
          15.75 6.06 15.75 6.75 15.19 8.25 14.5 8.25z"
          />
        </svg>
      </div>
      <span className="font-extrabold text-xl text-white tracking-wide">
        Hinetic
      </span>
    </Link>
  );
};
