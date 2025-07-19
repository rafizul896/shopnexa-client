import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be between 2 and 50 characters" })
    .max(50, { message: "Name must be between 2 and 50 characters" })
    .nonempty({ message: "Name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .nonempty({ message: "Password is required" }),
  passwordConfirm: z
    .string()
    .min(1, { message: "Password Confirmation is required" }),
});
