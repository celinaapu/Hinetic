"use client";

import { useEffect, useRef, useState } from "react";
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
}: SelectProps<T>) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {label && <label className="block mb-1 text-white">{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <div
              className={`w-full p-2 rounded bg-[#1E2A47] text-white border border-gray-500 cursor-pointer flex justify-between items-center ${className}`}
              onClick={() => setOpen((prev) => !prev)}
            >
              <span>
                {options.find((o) => o.value === field.value)?.label ||
                  "Select..."}
              </span>
              <span className="ml-2">&#9662;</span>
            </div>

            {open && (
              <ul className="absolute left-0 right-0 bg-[#1E2A47] text-white border border-gray-500 mt-1 max-h-60 overflow-auto z-50">
                {options.map((opt) => (
                  <li
                    key={opt.value}
                    className="px-3 py-2 hover:bg-[#334155] cursor-pointer"
                    onClick={() => {
                      field.onChange(opt.value);
                      setOpen(false);
                    }}
                  >
                    {opt.label}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Select;
