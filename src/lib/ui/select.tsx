"use client";

import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface SelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  options: { label: string; value: string }[];
  error?: string;
  className?: string;
}

const Select = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  error,
  className = "",
}: SelectProps<T>) => (
  <div>
    {label && <label className="text-white block mb-1">{label}</label>}
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <select
          {...field}
          className={`w-full p-2 rounded bg-[#1E2A47] text-white border border-gray-500 ${className}`}
        >
          {options.map((opt, i) => (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default Select;
