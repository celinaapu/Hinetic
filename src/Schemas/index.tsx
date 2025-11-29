import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
export const roleSchema = z.object({
  role: z.enum(
    [
      "Client",
      "Artisan",
      "Explorer",
      "Skilled-professional",
      "marketplace",
      "Carreer Guideance",
    ],
    { message: "Please choose a role" }
  ),
});

export const stepOneSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  gender: z.string().min(1, "Gender selection is required"),
  country: z.string().optional(),
  city: z.string().min(1, "City is required"),
  phone: z
    .string()
    .regex(/^\+?\d+$/, "Phone number must be numeric (e.g., +2348012345678)")
    .min(7, "Phone number is too short")
    .max(15, "Phone number is too long"),
});
export const stepTwoSchema = z
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

export const verificationSchema = z.object({
  code: z
    .string()
    .length(6, { message: "Verification code must be 6 digits" })
    .regex(/^\d+$/, { message: "Code must contain only numbers" }),
});
