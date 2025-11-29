// src/components/auth/register/StepOneComponent.tsx
"use client";

import Button from "@/lib/shared/Button";
import Input from "@/lib/ui/inputs";
import { stepOneSchema } from "@/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { City, ICity } from "country-state-city";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ComponentPropsWithoutRef, useEffect, useMemo, useState } from "react";
import CountryFlag from "react-country-flag";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import CreatableSelect from "react-select/creatable";
import { z } from "zod";

type StepOneFormData = z.infer<typeof stepOneSchema>;
type PhoneInputProps = ComponentPropsWithoutRef<typeof PhoneInput>;
type CountryCode = NonNullable<PhoneInputProps["defaultCountry"]>;

interface SelectOption {
  value: string;
  label: string;
}

interface StepOneProps {
  onNext: (data: StepOneFormData) => void;
}

const StepOneComponent: React.FC<StepOneProps> = ({ onNext }) => {
  const router = useRouter();
  const [cityOptions, setCityOptions] = useState<SelectOption[]>([]);

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<StepOneFormData>({
    resolver: zodResolver(stepOneSchema),
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      country: "",
      city: "",
      phone: "",
    },
  });

  const selectedCountryCode = watch("country");

  const countryOptions = useMemo(
    () => countryList().getData() as SelectOption[],
    []
  );

  useEffect(() => {
    setValue("city", "", { shouldValidate: false });
    setCityOptions([]);

    if (selectedCountryCode) {
      const cities: ICity[] | undefined =
        City.getCitiesOfCountry(selectedCountryCode);

      if (cities) {
        setCityOptions(
          cities.map((city) => ({ value: city.name, label: city.name }))
        );
      }
    }
  }, [selectedCountryCode, setValue]);

  const onSubmit = (data: StepOneFormData) => {
    try {
      localStorage.setItem("signupStepOneData", JSON.stringify(data));
      onNext(data);
    } catch (error) {
      console.error("Error storing data or navigating:", error);
    }
  };

  const isValidCountryCode = (code: string): code is CountryCode =>
    code.length === 2 && /^[A-Z]{2}$/.test(code);

  const defaultCountryCode: CountryCode | undefined =
    selectedCountryCode && isValidCountryCode(selectedCountryCode)
      ? selectedCountryCode
      : undefined;

  return (
    <motion.div
      className="w-full flex min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
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
            Join Us Today!
          </motion.h1>

          <motion.p
            className="text-lg mb-14"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Start your journey to finding the perfect job or the ideal
            candidate.
          </motion.p>

          <motion.p
            className="text-md opacity-90"
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Sign up in just a few easy steps and unlock access to thousands of
            career opportunities.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="bg-white w-full md:w-[43%] md:rounded-l-[60px] md:-ml-12 relative z-10 flex items-center justify-center py-12"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full p-8 max-w-lg">
          <div className="mb-6 text-center">
            <span className="text-sm text-[var(--color-text)]">
              Step 1 of 3
            </span>
          </div>

          <h2 className="text-2xl font-bold text-center text-[var(--color-primary)] mb-6">
            Tell Us About Yourself 👋
          </h2>

          <p className="text-[var(--color-text)] text-md mb-8 text-center">
            Just a few details to get started on Hinetic.
          </p>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
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

            <div className="mb-6">
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                Gender
              </label>

              <Controller
                name="gender"
                control={control}
                render={({ field }) => {
                  const genderOptions: SelectOption[] = [
                    { value: "Agender", label: "Agender" },
                    { value: "Androgyne", label: "Androgyne" },
                    { value: "Androgynous", label: "Androgynous" },
                    { value: "Non-binary", label: "Non-binary" },
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                    { value: "Male to Female", label: "Male to Female" },
                    { value: "Pangender", label: "Pangender" },
                    { value: "Trans", label: "Trans" },
                    { value: "Trans Female", label: "Trans Female" },
                    { value: "Trans Male", label: "Trans Male" },
                  ];

                  const selectedOption =
                    genderOptions.find((o) => o.value === field.value) || null;

                  return (
                    <CreatableSelect
                      isClearable
                      options={genderOptions}
                      value={selectedOption}
                      onChange={(option: SelectOption | null) =>
                        field.onChange(option?.value || "")
                      }
                      placeholder="Select or type your gender"
                      classNamePrefix="react-select"
                    />
                  );
                }}
              />
              {errors.gender && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.gender.message}
                </p>
              )}
            </div>

            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                    Country
                  </label>

                  <Select
                    {...field}
                    options={countryOptions}
                    placeholder="Select your country"
                    value={
                      countryOptions.find((o) => o.value === field.value) ||
                      null
                    }
                    onChange={(selected) =>
                      field.onChange(selected?.value || "")
                    }
                    formatOptionLabel={(item) => (
                      <div className="flex items-center gap-3">
                        <CountryFlag
                          countryCode={item.value}
                          svg
                          style={{ width: "1.2em", height: "1.2em" }}
                        />
                        <span>{item.label}</span>
                      </div>
                    )}
                    classNamePrefix="react-select"
                  />

                  {errors.country && (
                    <p className="text-red-600 text-sm mt-2">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              )}
            />

            <Controller
              name="city"
              control={control}
              render={({ field }) => {
                const selectedCityOption = cityOptions.find(
                  (o) => o.value === field.value
                );

                return (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                      City
                    </label>

                    <Select
                      {...field}
                      options={cityOptions}
                      placeholder={
                        selectedCountryCode
                          ? cityOptions.length > 0
                            ? "Select your city"
                            : "No cities found"
                          : "Select country first"
                      }
                      value={selectedCityOption || null}
                      onChange={(selected) =>
                        field.onChange(selected?.value || "")
                      }
                      isDisabled={
                        !selectedCountryCode || cityOptions.length === 0
                      }
                      classNamePrefix="react-select"
                    />

                    {errors.city && (
                      <p className="text-red-600 text-sm mt-2">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                );
              }}
            />

            <div className="mb-6">
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                Phone Number
              </label>

              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <div className="border border-gray-300 rounded-md shadow-sm h-12 flex items-center transition duration-150 ease-in-out focus-within:border-[var(--color-primary)]">
                    <PhoneInput
                      {...field}
                      international
                      defaultCountry={defaultCountryCode}
                      value={field.value || undefined}
                      onChange={field.onChange as PhoneInputProps["onChange"]}
                      placeholder="Enter phone number"
                      className="!w-full !h-full !border-none !shadow-none react-phone-input-container"
                      inputClassName="!w-full !h-full !border-none !shadow-none focus:ring-0"
                    />
                  </div>
                )}
              />

              {errors.phone && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-dark-blue-2)] text-white py-3 rounded-md font-semibold text-lg transition"
              >
                {isSubmitting ? "Processing..." : "Continue"}
              </Button>
            </motion.div>
          </motion.form>

          <div className="p-4 flex justify-center">
            <p className="font-semi-bold">Already have an account?</p>
            <span
              onClick={() => router.push("/auth/login")}
              className="font-bold text-purple-700 pl-2 underline cursor-pointer"
            >
              Login
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StepOneComponent;
