"use client";

import { JobFormData } from "@/lib/types";
import Navigation from "@/lib/ui/navigation";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const PostJobPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobFormData>();

  const onSubmit = (data: JobFormData) => {
    console.log("Job posted:", data);
    router.push("/client/dashboard");
  };

  return (
    <div className="flex-1 overflow-auto">
      <Navigation
        title="Post New Job"
        subtitle="Create a new job posting to attract top talent"
        showSearch={false}
        navigationItems={[]}
      />

      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      {...register("title", {
                        required: "Job title is required",
                      })}
                      className="input-field"
                      placeholder="e.g. Senior Frontend Developer"
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.title.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      {...register("company", {
                        required: "Company name is required",
                      })}
                      className="input-field"
                      placeholder="Your company name"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Job Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      {...register("location", {
                        required: "Location is required",
                      })}
                      className="input-field"
                      placeholder="e.g. Lagos, Nigeria or Remote"
                    />
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.location.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Type *
                    </label>
                    <select
                      {...register("type", {
                        required: "Job type is required",
                      })}
                      className="input-field"
                    >
                      <option value="">Select job type</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="freelance">Freelance</option>
                      <option value="internship">Internship</option>
                    </select>
                    {errors.type && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.type.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Salary Range
                    </label>
                    <input
                      {...register("salary")}
                      className="input-field"
                      placeholder="e.g. ₦2,000,000 - ₦3,000,000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level
                    </label>
                    <select {...register("experience")} className="input-field">
                      <option value="">Select experience level</option>
                      <option value="entry">Entry Level (0-2 years)</option>
                      <option value="mid">Mid Level (3-5 years)</option>
                      <option value="senior">Senior Level (6+ years)</option>
                      <option value="lead">Lead/Principal (8+ years)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Job Description
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    {...register("description", {
                      required: "Job description is required",
                    })}
                    rows={8}
                    className="input-field"
                    placeholder="Provide a detailed description of the role, responsibilities, and requirements..."
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Required Skills
                  </label>
                  <input
                    {...register("skills")}
                    className="input-field"
                    placeholder="e.g. React, TypeScript, Node.js, MongoDB (comma separated)"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Enter skills separated by commas
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6 border-t border-gray-200">
                <button type="submit" className="btn-primary flex-1">
                  Post Job
                </button>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="btn-secondary px-8"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostJobPage;
