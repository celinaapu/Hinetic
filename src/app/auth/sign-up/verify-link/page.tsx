"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/lib/shared/Button";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const verificationSchema = z.object({
  code: z
    .string()
    .length(6, "Verification code must be 6 digits")
    .regex(/^\d{6}$/, "Code must be numeric"),
});

type VerificationFormData = z.infer<typeof verificationSchema>;

const VerificationPage = () => {
  const router = useRouter();
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

  useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(() => setResendTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [resendTimer]);

  const onSubmit = async (data: VerificationFormData) => {
    try {
      console.log("Verifying code:", data.code);
      toast.success("Verification successful!");
      setTimeout(() => router.push("/dashboard"), 1000);
    } catch (error) {
      toast.error("Invalid verification code");
    }
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const currentCode = getValues("code").split("");
    currentCode[index] = value;
    const newCode = currentCode.join("");
    setValue("code", newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
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
  };

  return (
    <div className="min-h-screen bg-[#0B1D40] flex items-center justify-center px-4">
      <div className="bg-[#2F3A57] rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-white text-xl font-bold mb-6 text-center">
          Enter Verification Code
        </h2>
        <p className="text-white text-sm mb-4 text-center">
          We have sent a 6-digit verification code to your email.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Controller
            name="code"
            control={control}
            render={({ field }) => (
              <div className="flex justify-between gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputsRef.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    inputMode="numeric"
                    className="w-12 h-12 text-center text-lg rounded border bg-[#0B1D40] border-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={field.value[index] || ""}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
              </div>
            )}
          />
          {errors.code && (
            <p className="text-red-500 text-sm text-center">
              {errors.code.message}
            </p>
          )}

          <div className="flex items-center justify-between mt-2">
            <p className="text-sm text-white">Didn't receive a code?</p>
            <button
              type="button"
              className={`text-sm underline ${
                resendTimer > 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-yellow-300"
              }`}
              onClick={handleResend}
              disabled={resendTimer > 0}
            >
              {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend code"}
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black"
          >
            Verify
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VerificationPage;
