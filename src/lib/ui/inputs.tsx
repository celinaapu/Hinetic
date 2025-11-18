"use client";

import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues>
  extends Omit<
    React.ComponentPropsWithoutRef<"input">,
    "name" | "value" | "onChange" | "onBlur"
  > {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  error?: string;
  className?: string; 
  appendIcon?: React.ReactElement;
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
  ...restProps 
}: InputProps<T>) => (
  <div>
    {label && <label className="text-black block mb-1">{label}</label>}
    <div className="relative">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            {...restProps} 
            type={type}
            placeholder={placeholder || label}
            className={`w-full outline-none p-2 rounded text-black border border-gray-500 ${
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
