"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/lib/ui/inputs";
import Button from "@/lib/shared/Button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

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
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="relative lg:w-1/2 w-full flex flex-col justify-center px-6 py-16 text-white bg-[url('https://res.cloudinary.com/celina/image/upload/v1754908306/03-Sky_2_sn4cdn.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Connecting Talent
            <span className="block text-2xl md:text-4xl font-light mt-2">
              to Opportunities
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed">
            Discover endless opportunities on{" "}
            <span className="font-semibold">Hinetic</span>, where talented
            freelancers, artisans, and businesses unite. Jump right in with us!
          </p>

          <div className="mt-6">
            <p className="text-sm md:text-base italic opacity-90">
              Upload samples of your work to impress potential clients
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white lg:w-1/2 w-full flex items-center justify-center px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-[var(--color-primary)] mb-6">
            Welcome Back 👋
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              name="email"
              control={control}
              label="Email"
              error={errors.email?.message}
              type="email"
              className="focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]"
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
                  className="cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              }
              className="focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]"
            />

            <div className="text-right">
              <a
                href="#"
                className="text-sm text-[var(--color-accent)] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-dark-blue-2)] transition-colors duration-200 text-[var(--color-white)]"
            >
              Sign In
            </Button>

            <p className="text-sm text-center text-[var(--color-text)] mt-4">
              Don't have an account?
              <Link
                href="/auth/register"
                className="text-[var(--color-accent)] pl-2 hover:underline"
              >
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
