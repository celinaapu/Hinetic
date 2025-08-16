"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { BsFacebook } from "react-icons/bs";
import Input from "@/lib/ui/inputs";
import Select from "@/lib/ui/select";
import Button from "@/lib/shared/Button";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { stepOneSchema } from "@/Schemas";

const countries = ["", "Nigeria", "Ghana", "Kenya", "South Africa"];

type StepOneFormData = z.infer<typeof stepOneSchema>;

const StepOnePage: React.FC<{ onNext: () => void }> = ({ onNext }) => {
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
    <div className="min-h-screen w-[100%] flex">
      <div
        className="hidden md:flex relative w-[60%] flex-col justify-center items-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/celina/image/upload/v1754848373/Image_2_xnf4nq.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center max-w-md">
          <h1 className="text-5xl font-bold leading-tight mb-14">
            Join Us Today!
          </h1>
          <p className="text-lg mb-14">
            Start your journey to finding the perfect job or the ideal
            candidate.
          </p>
          <p className="text-md opacity-90">
            Sign up in just a few easy steps and unlock access to thousands of
            remote and local job opportunities tailored just for you.
          </p>
        </div>
      </div>

      <div className="bg-white w-full md:w-[43%] md:rounded-l-[60px] md:-ml-12 relative z-10 flex items-center justify-center py-8">
        <div className=" w-full p-8">
          <div className="mb-6 text-center">
            <span className="text-sm text-[var(--color-text)]">
              Step 1 of 3
            </span>
          </div>

          <h2 className="text-2xl font-bold text-center text-[var(--color-primary)] mb-6">
            Tell Us About Yourself 👋
          </h2>

          <p className="text-[var(--color-text)] text-md mb-8 text-center">
            Just a few details to get started on Hinetic as a member.
          </p>

          <div className="mb-6">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-[var(--color-border-1)] bg-white text-[var(--color-primary)] py-3 rounded-md font-semibold hover:bg-[var(--color-light-gray)] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.79-.07-1.54-.21-2.27H12v4.29h6.47c-.28 1.45-1.12 2.67-2.39 3.49v2.9h3.86c2.26-2.08 3.55-5.14 3.55-8.41z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.07 7.94-2.91l-3.86-2.9c-1.08.72-2.46 1.15-4.08 1.15-3.14 0-5.8-2.12-6.75-4.98H1.29v3.09C3.27 21.3 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.25 14.36a7.18 7.18 0 0 1 0-4.72V6.55H1.29a11.96 11.96 0 0 0 0 10.9l3.96-3.09z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.81l3.44-3.44C17.94 1.02 15.23 0 12 0 7.31 0 3.27 2.7 1.29 6.55l3.96 3.09C6.2 6.87 8.86 4.75 12 4.75z"
                />
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-[var(--color-border-1)]" />
            <span className="px-3 text-sm text-[var(--color-text)]">or</span>
            <hr className="flex-grow border-[var(--color-border-1)]" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
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
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                Sex
              </label>
              <div className="flex items-center gap-6">
                {(["male", "female"] as const).map((val) => (
                  <label key={val} className="flex items-center gap-2 ">
                    <input
                      type="radio"
                      value={val}
                      checked={selectedSex === val}
                      onChange={() => setSelectedSex(val)}
                      className="form-radio h-4 w-4 "
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
              onClick={onNext}
              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-dark-blue-2)] text-white py-3 rounded-md font-semibold text-lg transition-colors duration-200"
            >
              Continue
            </Button>
          </form>

          <div className="p-4 flex justify-center">
            <p className="font-semi-bold"> Already have an account?</p>
            <span className="font-bold text-purple-700 pl-2 underline ">
              Login
            </span>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:opacity-80 text-gray-600"
            >
              <BsFacebook className="h-6 w-6" />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="hover:opacity-80 text-gray-600"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:opacity-80 text-gray-600"
            >
              <FaSquareInstagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:opacity-80 text-gray-600"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOnePage;
