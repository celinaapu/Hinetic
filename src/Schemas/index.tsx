import { z } from "zod";

export const roleSchema = z.object({
  role: z.enum(
    ["client", "artisan", "explorer", "skilled-professional", "marketplace"],
    { message: "Please choose a role" }
  ),
});

export const stepOneSchema = z.object({
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
    .length(6, "Verification code must be 6 digits")
    .regex(/^\d{6}$/, "Code must be numeric"),
});

export type RoleFormData = z.infer<typeof roleSchema>;
export type StepOneFormData = z.infer<typeof stepOneSchema>;
export type StepTwoFormData = z.infer<typeof stepTwoSchema>;
export type VerificationFormData = z.infer<typeof verificationSchema>;

export type RegistrationStep =
  | "role"
  | "stepOne"
  | "stepTwo"
  | "verification"
  | "success";

export interface RegistrationData {
  role?: string;
  stepOne?: StepOneFormData;
  stepTwo?: StepTwoFormData;
  verification?: VerificationFormData;
}
