"use client";

import React, { useState } from "react";
import CategoryButton from "./categoryButtons";
import StatItem from "./statsItem";

const HeroSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("HEALTHCARE");

  const categories = [
    "HEALTHCARE",
    "FINANCE",
    "EDUCATION",
    "ENGINEERING",
    "SALES",
    "CUSTOMER SERVICE",
    "MARKETING",
    "HUMAN RESOURCES",
    "HOSPITALITY",
    "ADMINISTRATION",
    "RETAIL",
  ];

  return (
    <main className="bg-#9e8cf0 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-[#9e8cf0] opacity-80">
            Unlock Your Potential:
          </span>
          <br />
          <span className="text-[#0a0a23]">
            Find Your Perfect Job at Hinetic
          </span>
        </h1>

        <p className="text-[#7c7c7c] text-lg md:text-xl mx-auto mb-12 leading-relaxed">
          Hinetic is a vibrant marketplace built for genuine connections. We
          bring ambitious talent and forward-thinking companies together,
          creating a space where the best careers and the strongest teams are
          built.
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              label={`#${category}`}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 p-8 md:p-12">
          <StatItem number="1300+" label="Job Available" />
          <StatItem number="300+" label="Top Companies" />
          <StatItem number="3000+" label="Candidate Hired" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
