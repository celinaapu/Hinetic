import { Clock, DollarSign, MapPin } from "lucide-react";
import { JobCardProps } from "../types";

export const JobCard: React.FC<JobCardProps> = ({
  icon: Icon,
  iconBgColor,
  jobType,
  title,
  company,
  location,
  salary,
  postedTime,
  onApply,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="bg-[var(--color-secondary)] text-[var(--color-primary)] px-3 py-1 rounded-full text-sm font-medium">
          {jobType}
        </span>
      </div>
      <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
        {title}
      </h3>
      <p className="text-[var(--color-text)] mb-4">{company}</p>
      <div className="space-y-2 mb-6">
        <div className="flex items-center text-sm text-[var(--color-text)]">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </div>
        <div className="flex items-center text-sm text-[var(--color-text)]">
          <DollarSign className="w-4 h-4 mr-2" />
          {salary}
        </div>
        <div className="flex items-center text-sm text-[var(--color-text)]">
          <Clock className="w-4 h-4 mr-2" />
          {postedTime}
        </div>
      </div>
      <button
        onClick={onApply}
        className="w-full bg-[var(--color-primary)] text-white py-3 px-4 rounded-xl hover:bg-[var(--color-dark-blue-2)] transition-colors duration-300 font-medium"
      >
        Apply Now
      </button>
    </div>
  );
};
