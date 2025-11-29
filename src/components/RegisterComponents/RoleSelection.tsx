"use client";

import Button from "@/lib/shared/Button";
import { roleSchema } from "@/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type RoleFormData = z.infer<typeof roleSchema>;

interface RoleSelectionComponentProps {
  onBack?: () => void;
}

const roles = [
  { value: "Client", label: "I'm a Client", active: true },
  { value: "Explorer", label: "I'm an Explorer", active: true },
  { value: "Artisan", label: "I'm an Artisan", active: false },
  {
    value: "Skilled-professional",
    label: "I'm a Skilled Professional",
    active: false,
  },
  { value: "marketplace", label: "Go to Marketplace", active: false },
  { value: "Carreer Guideance", label: "Carreer Guideance", active: false },
] as const;

const RoleSelectionComponent: React.FC<RoleSelectionComponentProps> = ({
  onBack,
}) => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RoleFormData>({
    resolver: zodResolver(roleSchema),
    defaultValues: { role: undefined },
  });

  const [alert, setAlert] = React.useState("");

  const handleBack = () => {
    if (onBack) return onBack();
    router.back();
  };

  const onSubmit = (data: RoleFormData) => {
    if (!data.role) {
      setAlert("Please choose a role before continuing.");
      return;
    }

    setAlert("");

    switch (data.role.toLowerCase()) {
      case "client":
        router.push("/client");
        break;
      case "explorer":
        router.push("/applicant");
        break;
      case "artisan":
        router.push("/dashboard/artisan");
        break;
      case "skilled-professional":
        router.push("/dashboard/professional");
        break;
      case "marketplace":
        router.push("/marketplace");
        break;
      case "carreer guideance":
        router.push("/carreer-guideance");
        break;
      default:
        router.push("/dashboard");
        break;
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/celina/image/upload/v1754908306/03-Sky_2_sn4cdn.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative rounded-xl shadow-2xl p-8 w-full max-w-md bg-white border border-yellow-200 z-10"
      >
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-1"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back</span>
        </button>

        <h2 className="text-gray-900 text-2xl font-bold mb-6 mt-8 text-center">
          Select Your Role 🧑‍💻
        </h2>

        {alert && (
          <div className="mb-4 text-red-500 text-sm text-center">{alert}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {roles.map((role) => (
              <Controller
                key={role.value}
                name="role"
                control={control}
                render={({ field }) => (
                  <button
                    type="button"
                    onClick={() => role.active && field.onChange(role.value)}
                    className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 transform shadow-sm
                      ${
                        role.active
                          ? field.value === role.value
                            ? "bg-yellow-500 border-yellow-700 text-black scale-[1.02] font-semibold shadow-md"
                            : "bg-white border-gray-300 text-gray-800 hover:bg-yellow-50 hover:border-yellow-400"
                          : "bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed opacity-60"
                      }`}
                  >
                    {role.label}
                  </button>
                )}
              />
            ))}
          </div>

          {errors.role && (
            <p className="text-red-500 text-sm text-center">
              {errors.role.message}
            </p>
          )}

          <Button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.01] shadow-lg"
          >
            Continue
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default RoleSelectionComponent;
