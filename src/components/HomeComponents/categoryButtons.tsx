import React from "react";

interface CategoryButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  label,
  isActive = false,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
      isActive
        ? "bg-[#9e8cf0] text-white shadow-lg"
        : "bg-[#0a0a23] text-white hover:text-[#e0ff66] hover:bg-[#141328]"
    }`}
  >
    {label}
  </button>
);

export default CategoryButton;
