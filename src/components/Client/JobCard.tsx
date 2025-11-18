// components/client/JobCard.tsx
import React from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Building,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { Job } from "@/lib/types";
import { getStatusColor, formatDate } from "@/lib/utils";

interface JobCardProps {
  job: Job;
  onView?: (jobId: string) => void;
  onEdit?: (jobId: string) => void;
  onDelete?: (jobId: string) => void;
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                job.status
              )}`}
            >
              {job.status}
            </span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <Building size={14} />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span className="capitalize">{job.type.replace("-", " ")}</span>
            </div>
            <div className="flex items-center space-x-1">
              <DollarSign size={14} />
              <span>{job.salary}</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <span>Posted {formatDate(job.postedDate)}</span>
            <span className="flex items-center space-x-1">
              <Users size={14} />
              <span>{job.applications} applications</span>
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {onView && (
            <button
              onClick={() => onView(job.id)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Eye size={16} />
            </button>
          )}
          {onEdit && (
            <button
              onClick={() => onEdit(job.id)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Edit size={16} />
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(job.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
