/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { verificationSchema } from "@/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

type VerificationFormData = z.infer<typeof verificationSchema>;

// Using any here is fine because we disabled the lint rule above
const Button = ({ children, ...props }: any) => (
  <button {...props}>{children}</button>
);

interface VerificationProps {
  onNext: (data: VerificationFormData) => void;
  onBack: () => void;
  email?: string;
  onComplete: () => void;
}

const Verification: React.FC<VerificationProps> = ({
  onNext,
  onBack,
  email,
  onComplete,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<VerificationFormData>({
    resolver: zodResolver(verificationSchema),
    defaultValues: { code: "" },
  });

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [resendTimer, setResendTimer] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(() => setResendTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [resendTimer]);

  const onSubmit = async (data: VerificationFormData) => {
    setIsVerifying(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Verification successful!");
      onNext(data);
      onComplete();
    } catch {
      toast.error("Invalid verification code");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const currentCode = getValues("code").split("");
    currentCode[index] = value;
    setValue("code", currentCode.join(""), { shouldValidate: true });
    if (value && index < 5) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    toast.success("Verification code resent!");
    setResendTimer(30);
    setValue("code", "");
    inputsRef.current[0]?.focus();
  };

  return (
    <div className="min-h-screen flex md:flex-row">
      <div className="w-full bg-[var(--color-dark-blue-2)] md:w-1/2 flex justify-center items-center p-4 sm:p-6 lg:p-12">
        <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-center border border-gray-200 relative">
          <button
            type="button"
            onClick={onBack}
            className="absolute top-4 left-4 p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            Verify Your Email
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-relaxed">
            We've sent a 6-digit verification code to
            <span className="font-semibold text-blue-600">
              {email || "your email"}
            </span>
            . Please check your inbox and spam folder.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 sm:space-y-8"
          >
            <Controller
              name="code"
              control={control}
              render={({ field }) => (
                <div className="flex justify-center gap-2 sm:gap-3">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        inputsRef.current[index] = el;
                      }}
                      type="text"
                      maxLength={1}
                      inputMode="numeric"
                      className={`w-12 h-12 sm:w-14 sm:h-14 text-2xl font-bold text-center rounded-xl transition-all duration-200
      border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50
      bg-gray-50 text-gray-900 shadow-sm
      ${errors.code ? "border-red-500 focus:ring-red-500/50" : ""}
    `}
                      value={field.value[index] || ""}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      disabled={isVerifying}
                    />
                  ))}
                </div>
              )}
            />

            {errors.code && (
              <p className="text-red-500 text-sm mt-2">{errors.code.message}</p>
            )}

            <div className="flex flex-col items-center justify-center space-y-2 text-sm text-gray-500">
              <span className="text-center">Didn't receive the code?</span>
              <button
                type="button"
                onClick={handleResend}
                disabled={resendTimer > 0}
                className={`font-medium transition-colors duration-200
                  ${
                    resendTimer > 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-blue-600 hover:text-blue-700 underline"
                  }`}
              >
                {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend code"}
              </button>
            </div>

            <Button
              type="submit"
              onClick={onNext}
              disabled={isVerifying}
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-200
                ${
                  isVerifying
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-[var(--color-dark-blue-2)] hover:bg-blue-900 text-white shadow-md hover:shadow-lg"
                }`}
            >
              {isVerifying ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  Verifying...
                </div>
              ) : (
                "Verify & Continue"
              )}
            </Button>
          </form>
        </div>
      </div>

      <div className="hidden md:block w-1/2 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/celina/video/upload/v1755283576/0_Security_Shield_3840x2160_ntrdrf.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default Verification;
