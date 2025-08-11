"use client";

import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  error?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  appendIcon?: React.ReactElement;
  inputMode?:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
}

const Input = <T extends FieldValues>({
  name,
  control,
  label,
  error,
  className = "",
  type = "text",
  placeholder,
  appendIcon,
  inputMode,
}: InputProps<T>) => (
  <div>
    {label && <label className="text-white block mb-1">{label}</label>}
    <div className="relative">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder || label}
            className={`w-full outline-none p-2 rounded bg-[#1E2A47] text-white border border-gray-500 ${
              appendIcon ? "pr-10" : ""
            } ${className}`}
            inputMode={inputMode}
          />
        )}
      />
      {appendIcon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
          {appendIcon}
        </div>
      )}
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default Input;
