// app/client/dashboard/page.tsx
"use client";

import React, { useState } from "react";
import { Briefcase, Users, Eye, TrendingUp, Plus } from "lucide-react";
import { sampleJobs, clientStats } from "@/lib/data";
import { JobFormData } from "@/lib/types";
import { Header } from "@/lib/ui/header";
import { JobCard } from "@/components/Client/JobCard";
import { JobPostForm } from "@/components/Client/postJobForm";
import { StatsCard } from "@/lib/ui/statsCard";

const ClientDashboard = () => {
  const [showJobForm, setShowJobForm] = useState(false);
  const [jobs, setJobs] = useState(sampleJobs);

  const handleJobSubmit = (data: JobFormData) => {
    console.log("Job posted:", data);
    // Here you would typically send the data to your API
    // For now, we'll just log it and close the form
  };

  const handleViewJob = (jobId: string) => {
    console.log("View job:", jobId);
    // Navigate to job details page
  };

  const handleEditJob = (jobId: string) => {
    console.log("Edit job:", jobId);
    // Open edit form or navigate to edit page
  };

  const handleDeleteJob = (jobId: string) => {
    if (confirm("Are you sure you want to delete this job?")) {
      setJobs(jobs.filter((job) => job.id !== jobId));
    }
  };

  const recentActivity = [
    {
      action: "New application received",
      job: "Senior Frontend Developer",
      time: "2 hours ago",
    },
    {
      action: "Job posted successfully",
      job: "Product Manager",
      time: "1 day ago",
    },
    {
      action: "Interview scheduled",
      job: "UI/UX Designer",
      time: "2 days ago",
    },
    {
      action: "Application shortlisted",
      job: "Backend Engineer",
      time: "3 days ago",
    },
  ];

  return (
    <div className="flex-1 overflow-auto">
      <Header
        title="Client Dashboard"
        subtitle="Manage your job postings and applications"
      />

      <main className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            icon={Briefcase}
            title="Active Jobs"
            value={clientStats.activeJobs}
            change={8}
            color="bg-gradient-to-br from-blue-500 to-cyan-400"
          />
          <StatsCard
            icon={Users}
            title="Total Applications"
            value={clientStats.totalApplications}
            change={15}
            color="bg-gradient-to-br from-green-500 to-emerald-400"
          />
          <StatsCard
            icon={Eye}
            title="Profile Views"
            value={clientStats.profileViews.toLocaleString()}
            change={-3}
            color="bg-gradient-to-br from-purple-500 to-pink-400"
          />
          <StatsCard
            icon={TrendingUp}
            title="Hire Rate"
            value={`${clientStats.hireRate}%`}
            change={5}
            color="bg-gradient-to-br from-orange-500 to-yellow-400"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Your Job Postings
              </h2>
              <button
                onClick={() => setShowJobForm(true)}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all"
              >
                <Plus size={16} />
                <span>Post New Job</span>
              </button>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onView={handleViewJob}
                  onEdit={handleEditJob}
                  onDelete={handleDeleteJob}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Recent Activity
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-600">{activity.job}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <JobPostForm
        isOpen={showJobForm}
        onClose={() => setShowJobForm(false)}
        onSubmit={handleJobSubmit}
      />
    </div>
  );
};

export default ClientDashboard;
