"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import Input from "@/lib/ui/inputs";
import Select from "@/lib/ui/select";
import Button from "@/lib/shared/Button";

const countries = ["", "Nigeria", "Ghana", "Kenya", "South Africa"];

const stepOneSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  sex: z.enum(["male", "female"], {
    message: "Please select your sex.",
  }),
  country: z.string().optional(),
  city: z.string().min(1, "City is required"),
  phone: z
    .string()
    .regex(/^\d+$/, "Phone number must be numeric (e.g., 08012345678)")
    .min(7, "Phone number is too short")
    .max(15, "Phone number is too long"),
});

type StepOneFormData = z.infer<typeof stepOneSchema>;

const StepOnePage = () => {
  const [selectedSex, setSelectedSex] = useState<"male" | "female" | null>(
    null
  );
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<StepOneFormData>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      sex: undefined,
      country: "",
      city: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (selectedSex) {
      setValue("sex", selectedSex);
    }
  }, [selectedSex, setValue]);

  const onSubmit = (data: StepOneFormData) => {
    console.log("Step One Data:", { ...data, role: userRole });
    localStorage.setItem("signupStepOneData", JSON.stringify(data));
    router.push("/auth/sign-up/step-two");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left section: Matches LoginPage's dark blue background and text */}
      <div className="bg-[#0B1D40] text-white flex flex-col justify-center items-center px-8 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Join Us Today!</h1>
        <p className="text-lg text-center max-w-sm">
          Start your journey to finding the perfect job or the ideal candidate.
        </p>
      </div>

      {/* Right section: Matches LoginPage's light gray background and form container */}
      <div className="bg-[#f1f5f9] flex items-center justify-center py-8 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <div className="mb-6 text-center">
            <span className="text-sm text-gray-500">Step 1 of 3</span>
          </div>

          <h2 className="text-2xl font-bold text-center text-[#0B1D40] mb-6">
            Tell Us About Yourself 👋
          </h2>
          <p className="text-gray-600 text-md mb-8 text-center">
            {userRole === "recruiter"
              ? "Help us tailor your experience as a recruiter."
              : userRole === "employer"
              ? "Provide your details to manage your listings effectively."
              : "Just a few details to get started on your job search journey."}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="firstName"
                control={control}
                label="First Name"
                placeholder="Enter your first name"
                error={errors.firstName?.message}
              />
              <Input
                name="lastName"
                control={control}
                label="Last Name"
                placeholder="Enter your last name"
                error={errors.lastName?.message}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sex
              </label>
              <div className="flex items-center gap-6">
                {(["male", "female"] as const).map((val) => (
                  <label
                    key={val}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <input
                      type="radio"
                      value={val}
                      checked={selectedSex === val}
                      onChange={() => setSelectedSex(val)}
                      className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    {val.charAt(0).toUpperCase() + val.slice(1)}
                  </label>
                ))}
              </div>
              {errors.sex && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.sex.message}
                </p>
              )}
            </div>

            <Select
              name="country"
              control={control}
              label="Country (optional)"
              options={countries.map((c) => ({
                label: c || "Select Country",
                value: c,
              }))}
            />

            <Input
              name="city"
              control={control}
              label="City"
              placeholder="e.g., Lagos"
              error={errors.city?.message}
            />

            <Input
              name="phone"
              control={control}
              label="Phone Number"
              placeholder="e.g., 08012345678"
              error={errors.phone?.message}
              type="tel"
              inputMode="numeric"
            />

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-md font-semibold text-lg transition-colors duration-200"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepOnePage;
