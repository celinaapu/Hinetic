"use client";

// Assuming these imports are correct relative to your file structure
import { ApplicationCard } from "@/components/Applicant/applicationCard";
import { applicantStats, sampleApplications } from "@/lib/data";
// MODIFIED: Corrected the import path assumption if Navigation is a separate component file
import { StatsCard } from "@/lib/ui/statsCard";
import { Calendar, Eye, Filter, Search, Send, Star } from "lucide-react";
import React from "react";

// Types
interface RecommendedJob {
  title: string;
  company: string;
  location: string;
  salary: string;
  match: number;
}

const recommendedJobs: RecommendedJob[] = [
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



const ApplicantDashboard: React.FC = () => {
  const handleViewApplication = (applicationId: string): void => {
    console.log("View application:", applicationId);
  };

  const handleMessageEmployer = (applicationId: string): void => {
    console.log("Message employer for application:", applicationId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="p-4 sm:p-6 flex-1 w-full max-w-7xl mx-auto">
        <header className="mb-8 md:hidden">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Job Search Dashboard
          </h1>
          <p className="text-gray-600">Find your next opportunity</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            icon={Send}
            title="Applications Sent"
            value={applicantStats.applicationsSent.toString()}
            change={12}
            color="bg-gradient-to-br from-blue-500 to-cyan-400"
          />
          <StatsCard
            icon={Eye}
            title="Profile Views"
            value={applicantStats.profileViews.toString()}
            change={8}
            color="bg-gradient-to-br from-green-500 to-emerald-400"
          />
          <StatsCard
            icon={Calendar}
            title="Interviews"
            value={applicantStats.interviews.toString()}
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
          <section className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 sm:mb-0">
                My Applications
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                  aria-label="Filter Applications"
                >
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
                <button
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all text-sm shadow-md"
                  aria-label="Find New Jobs"
                >
                  <Search size={16} />
                  <span>Find Jobs</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {sampleApplications.length > 0 ? (
                sampleApplications.map((application) => (
                  <ApplicationCard
                    key={application.id}
                    application={application}
                    onView={() => handleViewApplication(application.id)}
                    onMessage={() => handleMessageEmployer(application.id)}
                  />
                ))
              ) : (
                <div className="p-6 bg-white border border-dashed border-gray-300 rounded-xl text-center text-gray-500">
                  You haven&apos;t applied to any jobs yet. Start your search now!
                </div>
              )}
            </div>
          </section>

          <aside>
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Recommended Jobs
              </h2>
              <div className="space-y-4">
                {recommendedJobs.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {job.title}
                        </h3>
                        <p className="text-sm text-gray-600">{job.company}</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium flex-shrink-0">
                        {job.match}% match
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        {job.location}
                      </span>
                      <span className="font-semibold text-indigo-600">
                        {job.salary}
                      </span>
                    </div>
                    <button className="w-full mt-1 py-2 text-sm bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors font-medium">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full p-4 text-left bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                  <div className="font-medium text-gray-900">
                    Update Profile
                  </div>
                  <div className="text-sm text-gray-600">
                    Keep your profile current for better matches.
                  </div>
                </button>
                <button className="w-full p-4 text-left bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                  <div className="font-medium text-gray-900">Upload Resume</div>
                  <div className="text-sm text-gray-600">
                    Add your latest resume version.
                  </div>
                </button>
                <button className="w-full p-4 text-left bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                  <div className="font-medium text-gray-900">Job Alerts</div>
                  <div className="text-sm text-gray-600">
                    Set up custom alerts for new listings.
                  </div>
                </button>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ApplicantDashboard;
