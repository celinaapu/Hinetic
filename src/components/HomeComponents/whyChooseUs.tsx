"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="w-full px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 bg-[var(--color-main-bg)]">
      <div className="w-full h-[300px] md:h-[450px] bg-[var(--color-main-bg)] rounded-3xl shadow-md flex items-center justify-center">
        <span className="text-[var(--color-primary)] font-bold">
          [Hero Illustration]
        </span>
      </div>

      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark-blue-1)]">
          Why Choose TokoJobs?
        </h2>

        <ul className="flex flex-col gap-4">
          {[
            "Access verified on-demand technicians",
            "Track performance and hire again",
            "Secure, real-time payment system",
            "Rate your technicians for community benefit",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-[var(--color-accent)] w-6 h-6 mt-1" />
              <span className="text-base text-[var(--color-dark-blue-1)] font-medium">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <button className="mt-4 inline-flex items-center gap-2 text-white bg-[var(--color-accent)] px-6 py-3 rounded-lg hover:bg-[var(--color-purple)] transition">
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="md:col-span-2 w-full bg-[var(--color-variant-bg)] rounded-xl p-6 mt-10">
        <blockquote className="text-xl md:text-2xl italic font-medium text-[var(--color-dark-blue-1)]">
          “I was able to find a qualified technician in minutes. The service is
          fast, trustworthy, and the rating system gave me confidence.”
        </blockquote>
        <p className="mt-4 text-sm text-[var(--color-text)] font-semibold">
          — Jane D., Small Business Owner
        </p>
      </div>

      <div className="md:col-span-2 w-full flex justify-center items-center bg-[var(--color-light-gray)] rounded-xl p-10 mt-10 h-[300px]">
        <p className="text-lg text-[var(--color-text)] italic">
          [Insert your animated video here — placeholder section]
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
