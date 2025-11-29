"use client";

import Button from "@/lib/shared/Button";
import Input from "@/lib/ui/inputs";
import { stepTwoSchema } from "@/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export type StepTwoFormData = z.infer<typeof stepTwoSchema>;

interface StepTwoComponentProps {
  onNext: (data: StepTwoFormData) => void;
  onBack: () => void;
}

const StepTwoComponent: React.FC<StepTwoComponentProps> = ({
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Account created successfully!");
      onNext(data);
    } catch {
      toast.error("Account creation failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex w-screen min-h-screen overflow-hidden">
      {/* LEFT SECTION */}
      <motion.div
        className="hidden md:flex relative w-[60%] flex-col justify-center items-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/celina/image/upload/v1754848373/Image_2_xnf4nq.jpg')",
        }}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center max-w-md p-8">
          <motion.h1
            className="text-5xl font-bold leading-tight mb-14"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Create Your Secure Account
          </motion.h1>

          <motion.p
            className="text-lg mb-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {"You're almost there! Set up your login details to continue."}
          </motion.p>

          <motion.p
            className="text-md opacity-90"
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {
              "Secure your information with a strong password and move to the final step."
            }
          </motion.p>
        </div>
      </motion.div>

      {/* RIGHT SECTION */}
      <motion.div
        className="bg-white w-full md:w-[43%] md:rounded-l-[60px] md:-ml-12 relative z-10 flex items-center justify-center py-12"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full p-8 max-w-lg">
          <Button
            type="button"
            onClick={onBack}
            className="flex text-gray-700 transition-colors mb-4"
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
            {/* Email */}
            <Input
              name="email"
              control={control}
              label="Email"
              error={errors.email?.message}
              type="email"
            />

            {/* Password */}
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
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              }
            />

            {/* Confirm Password */}
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
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              }
            />

            {/* Agree Checkbox */}
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

            {/* Submit Button */}
            <Button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-black hover:bg-yellow-500 transition-colors mt-6"
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
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default StepTwoComponent;
