// components/applicant/ApplicationCard.tsx
import React from "react";
import { Building, DollarSign, Eye, Send } from "lucide-react";
import { Application } from "@/lib/types";
import { getStatusColor, formatDate } from "@/lib/utils";

interface ApplicationCardProps {
  application: Application;
  onView?: (applicationId: string) => void;
  onMessage?: (applicationId: string) => void;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({
  application,
  onView,
  onMessage,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {application.jobTitle}
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                application.status
              )}`}
            >
              {application.status}
            </span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <Building size={14} />
              <span>{application.company}</span>
            </div>
            <div className="flex items-center space-x-1">
              <DollarSign size={14} />
              <span>{application.salary}</span>
            </div>
            {application.location && (
              <div className="flex items-center space-x-1">
                <span>{application.location}</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <span>Applied {formatDate(application.appliedDate)}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {onView && (
            <button
              onClick={() => onView(application.id)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Eye size={16} />
            </button>
          )}
          {onMessage && (
            <button
              onClick={() => onMessage(application.id)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Send size={16} />
            </button>
          )}
        </div>
      </div>

      {application.status === "interview" && (
        <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-sm text-orange-800 font-medium">
            Interview scheduled for tomorrow at 2:00 PM
          </p>
        </div>
      )}
    </div>
  );
};
