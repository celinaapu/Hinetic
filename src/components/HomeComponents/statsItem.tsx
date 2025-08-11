import React from "react";

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-bold text-[#0a0a23] mb-2">
      {number}
    </div>
    <div className="text-[#7c7c7c] text-sm md:text-base">{label}</div>
  </div>
);

export default StatItem;
