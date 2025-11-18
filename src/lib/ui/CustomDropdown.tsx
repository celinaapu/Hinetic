"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

type DropdownOption = { label: string; value: string };

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string | undefined;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  error?: string;
  disabled?: boolean;
  showFlags?: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  error,
  disabled = false,
  showFlags = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayValue = isTyping ? inputValue : selectedOption?.label || "";

  const getFlagEmoji = (countryCode: string) => {
    if (!countryCode) return "";
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setInputValue("");
        setIsTyping(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions =
    isTyping && inputValue
      ? options.filter((option) =>
          option.label.toLowerCase().includes(inputValue.toLowerCase())
        )
      : options;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsTyping(true);
    if (!isOpen) setIsOpen(true);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
    setIsTyping(false);
    setInputValue("");
  };

  const handleChevronClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    setIsTyping(false);
    setInputValue("");
    if (!isOpen) inputRef.current?.focus();
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setInputValue("");
    setIsTyping(false);
    inputRef.current?.blur();
  };

  const showNoResults = isTyping && inputValue && filteredOptions.length === 0;

  return (
    <div className="mb-6 relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
        {label}
      </label>

      {/* Input Field */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={displayValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full border rounded-md p-3 h-12 ${
            showFlags && displayValue && !isTyping ? "pl-12" : ""
          } pr-10 bg-white ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          } ${error ? "border-red-500" : "border-gray-300"} ${
            displayValue ? "text-gray-900" : "text-gray-400"
          } outline-none transition-all`}
        />
        {showFlags && displayValue && !isTyping && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-2xl">{getFlagEmoji(displayValue)}</span>
          </div>
        )}
        <div
          onClick={handleChevronClick}
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        >
          <ChevronDown
            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-hidden">
          <div className="overflow-y-auto max-h-64">
            {showNoResults ? (
              <div className="p-4 text-gray-500 text-center">
                No results found
              </div>
            ) : (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors flex items-center gap-3 ${
                    value === option.value
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-900"
                  }`}
                >
                  {showFlags && (
                    <span className="text-2xl">
                      {getFlagEmoji(option.value)}
                    </span>
                  )}
                  <span>{option.label}</span>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default CustomDropdown;
