"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/lib/shared/Button";
import Input from "@/lib/ui/inputs";
import { useRouter } from "next/navigation";

const stepTwoSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm: z.string(),
    agree: z.boolean().refine((val) => val === true, {
      message: "You must agree to terms and privacy policy",
    }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export type StepTwoFormData = z.infer<typeof stepTwoSchema>;

interface StepTwoProps {
  onSubmit: (data: StepTwoFormData) => void;
}

const StepTwo: React.FC<StepTwoProps> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StepTwoFormData>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      agree: false,
    },
  });

  const handleStepTwoSubmit = (data: StepTwoFormData) => {
    console.log("Step Two Data:", data);

    router.push("/auth/sign-up/verify-link");
  };

  return (
    <div className="min-h-screen bg-[#0B1D40] flex items-center justify-center px-4">
      <div className="bg-[#2F3A57] rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-white text-xl font-bold mb-6">Sign up - Step 2</h2>
        <form
          onSubmit={handleSubmit(handleStepTwoSubmit)}
          className="space-y-4"
        >
          <Input
            name="email"
            control={control}
            label="Email"
            error={errors.email?.message}
            type="email"
          />

          <Input
            name="password"
            control={control}
            label="Password"
            error={errors.password?.message}
            type={showPassword ? "text" : "password"}
            appendIcon={
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            }
          />

          <Input
            name="confirm"
            control={control}
            label="Confirm Password"
            error={errors.confirm?.message}
            type={showConfirm ? "text" : "password"}
            appendIcon={
              <button
                type="button"
                onClick={() => setShowConfirm((prev) => !prev)}
              >
                {showConfirm ? "🙈" : "👁️"}
              </button>
            }
          />

          <div className="flex items-center gap-2">
            <Controller
              name="agree"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  checked={!!field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <p className="text-white text-sm">
              I agree with <span className="underline">Terms</span> and
              <span className="underline">Privacy</span>
            </p>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-sm">{errors.agree.message}</p>
          )}

          <Button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
