"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/lib/ui/inputs";
import Button from "@/lib/shared/Button";
import { Eye, EyeOff } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Logging in with:", data);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#0B1D40] text-white flex flex-col justify-center items-center px-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Find your next job
        </h1>
        <p className="text-lg text-center max-w-sm">
          Sign in to access thousands of remote and local job opportunities
          tailored just for you.
        </p>
      </div>

      <div className="bg-[#f1f5f9] flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-[#0B1D40] mb-6">
            Welcome Back 👋
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="cursor-pointer text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              }
            />

            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white"
            >
              Sign In
            </Button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Create one
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
