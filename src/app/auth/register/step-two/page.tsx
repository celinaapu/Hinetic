"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/lib/shared/Button";
import Input from "@/lib/ui/inputs";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ChevronLeft, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";

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

const StepTwo: React.FC<{ onNext: () => void; onBack: () => void }> = ({
  onNext,
  onBack,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

  const onSubmit = async (data: StepTwoFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Submitting form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Account created successfully!");
      onNext(); 
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Account creation failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[url('https://res.cloudinary.com/celina/image/upload/v1754908306/03-Sky_2_sn4cdn.jpg')] bg-cover bg-center">
      <div className="relative inset-0 bg-black/50"></div>
      <div className="bg-white rounded-lg shadow-lg w-[40%] p-8 relative z-10">
        <Button
          type="button"
          onClick={onBack}
          className="flex text-gray-700 transition-colors"
        >
          <ChevronLeft size={18} />
        </Button>
        <div className="mb-8 text-center">
          <p className="text-sm text-yellow-500 font-semibold">Step 2 of 3</p>
          <h1 className="text-2xl font-bold text-gray-800 mt-1">
            Create Your Account 🔑
          </h1>
          <p className="text-gray-500 mt-2">
            Set up your login details and secure your account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 text-black"
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
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
                aria-label={
                  showConfirm
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
                onClick={() => setShowConfirm((prev) => !prev)}
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
          />

          <div className="flex items-center gap-2">
            <Controller
              name="agree"
              control={control}
              render={({ field }) => (
                <input
                  id="agree"
                  type="checkbox"
                  checked={!!field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  className="cursor-pointer"
                />
              )}
            />
            <label
              htmlFor="agree"
              className="text-sm text-gray-600 cursor-pointer"
            >
              I agree with{" "}
              <span className="underline text-yellow-600">Terms</span> and{" "}
              <span className="underline text-yellow-600">Privacy</span>
            </label>
          </div>

          {errors.agree && (
            <p className="text-red-500 text-sm">{errors.agree.message}</p>
          )}

          <div className="flex justify-between items-center gap-4 mt-6">
            <Button
              type="submit"
              onClick={onNext}
              className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-gray-900"></div>
                  Submitting...
                </>
              ) : (
                <>
                  Next <ChevronRight size={18} />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
