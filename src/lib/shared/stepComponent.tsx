"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/lib/ui/inputs";
import Select from "@/lib/ui/select";
import Button from "@/lib/shared/Button";

const countries = ["", "Nigeria", "Ghana", "Kenya", "South Africa"];

const stepOneSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  country: z.string().optional(),
});

type StepOneFormData = z.infer<typeof stepOneSchema>;

interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
}

const StepLayout: React.FC<StepProps> = ({
  stepNumber,
  title,
  description,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StepOneFormData>({
    resolver: zodResolver(stepOneSchema),
  });

  const onSubmit = (data: StepOneFormData) => {
    console.log("Step Data:", data);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dhliy2g1g/image/upload/v1754848373/Image_2_xnf4nq.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-8">
        {/* Step Indicator */}
        <div className="text-center mb-4">
          <span className="text-sm text-gray-600">Step {stepNumber} of 3</span>
        </div>

        {/* Step Title */}
        <h2 className="text-2xl font-bold text-center text-[var(--color-primary)] mb-4">
          {title}
        </h2>

        {/* Step Description */}
        <p className="text-center text-gray-700 mb-6">{description}</p>

        {/* Example Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            name="firstName"
            control={control}
            label="First Name"
            error={errors.firstName?.message}
          />
          <Input
            name="lastName"
            control={control}
            label="Last Name"
            error={errors.lastName?.message}
          />
          <Select
            name="country"
            control={control}
            label="Country (optional)"
            options={countries.map((c) => ({
              label: c || "Select Country",
              value: c,
            }))}
          />
          <Button
            type="submit"
            className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-dark-blue-2)] text-white py-3 rounded-md font-semibold text-lg transition-colors duration-200"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default function StepOnePage() {
  return (
    <StepLayout
      stepNumber={1}
      title="Tell Us About Yourself 👋"
      description="Just a few details to get started on Hinetic as a member."
    />
  );
}
