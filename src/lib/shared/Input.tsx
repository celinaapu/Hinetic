import React from "react";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  prependIcon?: React.ReactNode;
  appendIcon?: React.ReactNode;
  className?: string;
  inputBgColor?: string; 
  borderColor?: string;
  textColor?: string;
}

type InputProps<T extends FieldValues> = BaseInputProps & {
  name: Path<T>;
  control: Control<T>;
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    "setValueAs" | "disabled" | "valueAsNumber" | "valueAsDate"
  >;
};

export function Input<T extends FieldValues>({
  label,
  error,
  className = "",
  type = "text",
  prependIcon,
  appendIcon,
  name,
  control,
  rules,
  inputBgColor = "bg-white",
  borderColor = "border-gray-300",
  textColor = "text-gray-900",
  ...props
}: InputProps<T>) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <div
            className={`flex items-center rounded-md border ${borderColor} ${inputBgColor}`}
          >
            {prependIcon && (
              <span className="pl-2 text-gray-500">{prependIcon}</span>
            )}

            <input
              {...field}
              {...props}
              type={type}
              id={name}
              className={`flex-1 px-3 py-2 outline-none rounded-md ${inputBgColor} ${textColor} placeholder-gray-400`}
            />

            {appendIcon && (
              <span className="pr-2 text-gray-500">{appendIcon}</span>
            )}
          </div>
        )}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
