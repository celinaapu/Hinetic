"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button {...props} className={`rounded p-2 font-semibold ${className}`}>
    {children}
  </button>
);

export default Button;
