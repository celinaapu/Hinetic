"use client";

import React from "react";
import { ArrowRight, Building2, Users, TrendingUp, Star } from "lucide-react";
import { JobCard } from "@/lib/shared/jobCard";

const MiddleSections: React.FC = () => {
  return (
    <div>
      <section className="pt-14 pb-20 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-gray-300">Who We Are</h3>
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] leading-tight mb-6">
              Your Bridge to <br /> Professional Growth
            </h1>
            <p className="text-lg text-[var(--color-text)] mb-8">
              Discover top jobs, connect with recruiters, and grow your career
              with ease.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-md">
              <button className="flex items-center justify-between w-full bg-[var(--color-primary)] text-white text-sm tracking-wide uppercase font-semibold px-6 py-4 rounded-xl hover:bg-[var(--color-dark-blue-2)] transition-colors duration-300">
                Innovative Matching Algorithm
                <ArrowRight className="w-4 h-4 text-[var(--color-accent)]" />
              </button>

              <button className="flex items-center justify-between w-full bg-[var(--color-primary)] text-white text-sm tracking-wide uppercase font-semibold px-6 py-4 rounded-xl hover:bg-[var(--color-dark-blue-2)] transition-colors duration-300">
                User-Friendly Interface
                <ArrowRight className="w-4 h-4 text-[var(--color-accent)]" />
              </button>

              <button className="flex items-center justify-between w-full bg-[var(--color-primary)] text-white text-sm tracking-wide uppercase font-semibold px-6 py-4 rounded-xl hover:bg-[var(--color-dark-blue-2)] transition-colors duration-300">
                Comprehensive Job Listings
                <ArrowRight className="w-4 h-4 text-[var(--color-accent)]" />
              </button>

              <button className="flex items-center justify-between w-full bg-[var(--color-primary)] text-white text-sm tracking-wide uppercase font-semibold px-6 py-4 rounded-xl hover:bg-[var(--color-dark-blue-2)] transition-colors duration-300">
                Hire Skilled Professionals
                <ArrowRight className="w-4 h-4 text-[var(--color-accent)]" />
              </button>

              <button className="flex items-center justify-between w-full bg-[var(--color-primary)] text-white text-sm tracking-wide uppercase font-semibold px-6 py-4 rounded-xl hover:bg-[var(--color-dark-blue-2)] transition-colors duration-300">
                AI-Powered Talent Discovery
                <ArrowRight className="w-4 h-4 text-[var(--color-accent)]" />
              </button>

              <button className="flex items-center justify-between w-full bg-[var(--color-primary)] text-white text-sm tracking-wide uppercase font-semibold px-6 py-4 rounded-xl hover:bg-[var(--color-dark-blue-2)] transition-colors duration-300">
                Explore Marketplace
                <ArrowRight className="w-4 h-4 text-[var(--color-accent)]" />
              </button>
            </div>
          </div>

          <div className="w-full h-[600px] bg-[var(--color-main-bg)] rounded-3xl shadow-md flex items-center justify-center">
            <span className="text-[var(--color-primary)] font-bold">
              [Hero Illustration]
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className=" grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-[var(--color-accent)] rounded-3xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-purple)] opacity-90">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 text-white text-center">
                      {[
                        { icon: <Building2 />, label: "Companies" },
                        { icon: <Users />, label: "Professionals" },
                        { icon: <TrendingUp />, label: "Growth" },
                        { icon: <Star />, label: "Success" },
                      ].map(({ icon, label }, idx) => (
                        <div key={idx} className="bg-white/20 rounded-lg p-4">
                          <div className="w-8 h-8 mx-auto mb-2">{icon}</div>
                          <p className="text-sm">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
                Partnering in the Journey of
                <br />
                <span className="text-[var(--color-accent)] m-2">2,000</span>
                Thriving <br />
                Enterprises
              </h2>
              <p className="text-lg text-[var(--color-text)] leading-relaxed">
                Collaborating with talent-driven organizations and top-tier
                candidates to spark impactful growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <Building2 />,
                value: "2,000+",
                label: "Partner Companies",
              },
              { icon: <Users />, value: "60,000+", label: "Active Users" },
              { icon: <TrendingUp />, value: "98%", label: "Success Rate" },
              { icon: <Star />, value: "4.9", label: "Avg. Rating" },
            ].map(({ icon, value, label }, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[var(--color-variant-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 text-[var(--color-accent)]">
                    {icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                  {value}
                </h3>
                <p className="text-[var(--color-text)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-[var(--color-variant-bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6">
              Latest Featured Jobs
            </h2>
            <p className="text-lg text-[var(--color-text)] max-w-2xl mx-auto">
              Discover exciting opportunities from top companies. Find your
              perfect match and take the next step in your career journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <JobCard
              icon={Building2}
              iconBgColor="bg-[var(--color-accent)]"
              jobType="Full-time"
              title="Senior Frontend Developer"
              company="TechCorp Solutions"
              location="San Francisco, CA"
              salary="$120k - $150k"
              postedTime="Posted 2 days ago"
              onApply={() => console.log("Applied to Frontend Developer")}
            />

            <JobCard
              icon={Users}
              iconBgColor="bg-[var(--color-yellow)]"
              jobType="Full-time"
              title="Product Manager"
              company="Innovation Labs"
              location="New York, NY"
              salary="$130k - $160k"
              postedTime="Posted 1 day ago"
              onApply={() => console.log("Applied to Product Manager")}
            />

            <JobCard
              icon={TrendingUp}
              iconBgColor="bg-[var(--color-purple)]"
              jobType="Contract"
              title="UX/UI Designer"
              company="Creative Studio Pro"
              location="Remote"
              salary="$80k - $100k"
              postedTime="Posted 3 days ago"
              onApply={() => console.log("Applied to UX/UI Designer")}
            />
          </div>

          <div className="text-center mt-12">
            <button className="bg-[var(--color-accent)] text-white py-4 px-8 rounded-lg hover:bg-[var(--color-purple)] transition-colors duration-300 font-medium inline-flex items-center">
              Browse More
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddleSections;
