"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/lib/shared/Button";

const roleSchema = z.object({
  role: z.enum(["client", " Explorer"], {
    message: "Please choose a role",
  }),
});

type RoleFormData = z.infer<typeof roleSchema>;

const SignUp = () => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RoleFormData>({
    resolver: zodResolver(roleSchema),
  });

  const onSubmit = (data: RoleFormData) => {
    localStorage.setItem("userRole", data.role);
    router.push("/auth/sign-up/step-one");
  };

  return (
    <div className="min-h-screen bg-[#0B1D40] flex items-center justify-center px-4">
      <div className="bg-[#2F3A57] rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-white text-xl font-bold mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex gap-4 justify-center">
            {(["client", " Explorer"] as const).map((role) => (
              <Controller
                key={role}
                name="role"
                control={control}
                render={({ field }) => (
                  <button
                    type="button"
                    onClick={() => field.onChange(role)}
                    className={`px-6 py-3 rounded-lg border ${
                      field.value === role
                        ? "bg-yellow-400 text-black"
                        : "text-white border-white"
                    }`}
                  >
                    {role === "client" ? "I'm a Client" : "I'm an Explorer"}
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
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
