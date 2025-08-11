// app/applicant/dashboard/page.tsx
"use client";

import React from "react";
import { Send, Eye, Calendar, Star, Search, Filter } from "lucide-react";
import { sampleApplications, applicantStats } from "@/lib/data";
import { Header } from "@/lib/ui/header";
import { ApplicationCard } from "@/components/Applicant/applicationCard";
import { StatsCard } from "@/lib/ui/statsCard";

const ApplicantDashboard = () => {
  const handleViewApplication = (applicationId: string) => {
    console.log("View application:", applicationId);
    // Navigate to application details
  };

  const handleMessageEmployer = (applicationId: string) => {
    console.log("Message employer for application:", applicationId);
    // Open messaging interface
  };

  const recommendedJobs = [
    {
      title: "React Developer",
      company: "TechStart",
      location: "Lagos",
      salary: "₦2,200,000",
      match: 95,
    },
    {
      title: "Full Stack Engineer",
      company: "InnovateCorp",
      location: "Remote",
      salary: "₦3,500,000",
      match: 88,
    },
    {
      title: "Frontend Lead",
      company: "DevStudio",
      location: "Abuja",
      salary: "₦4,200,000",
      match: 82,
    },
  ];

  return (
    <div className="flex-1 overflow-auto">
      <Header
        title="Job Search Dashboard"
        subtitle="Find your next opportunity"
      />

      <main className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            icon={Send}
            title="Applications Sent"
            value={applicantStats.applicationsSent}
            change={12}
            color="bg-gradient-to-br from-blue-500 to-cyan-400"
          />
          <StatsCard
            icon={Eye}
            title="Profile Views"
            value={applicantStats.profileViews}
            change={8}
            color="bg-gradient-to-br from-green-500 to-emerald-400"
          />
          <StatsCard
            icon={Calendar}
            title="Interviews"
            value={applicantStats.interviews}
            change={50}
            color="bg-gradient-to-br from-purple-500 to-pink-400"
          />
          <StatsCard
            icon={Star}
            title="Success Rate"
            value={`${applicantStats.successRate}%`}
            change={5}
            color="bg-gradient-to-br from-orange-500 to-yellow-400"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                My Applications
              </h2>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all">
                  <Search size={16} />
                  <span>Find Jobs</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {sampleApplications.map((application) => (
                <ApplicationCard
                  key={application.id}
                  application={application}
                  onView={handleViewApplication}
                  onMessage={handleMessageEmployer}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Recommended Jobs
            </h2>
            <div className="space-y-4">
              {recommendedJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600">{job.company}</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {job.match}% match
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{job.location}</span>
                    <span className="font-medium text-gray-900">
                      {job.salary}
                    </span>
                  </div>
                  <button className="w-full mt-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full p-3 text-left bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="font-medium text-gray-900">
                    Update Profile
                  </div>
                  <div className="text-sm text-gray-600">
                    Keep your profile current
                  </div>
                </button>
                <button className="w-full p-3 text-left bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="font-medium text-gray-900">Upload Resume</div>
                  <div className="text-sm text-gray-600">
                    Add your latest resume
                  </div>
                </button>
                <button className="w-full p-3 text-left bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="font-medium text-gray-900">Job Alerts</div>
                  <div className="text-sm text-gray-600">
                    Set up custom alerts
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplicantDashboard;
