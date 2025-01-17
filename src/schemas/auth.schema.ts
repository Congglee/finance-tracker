import { z } from "zod";

export const LoginBody = z
  .object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Invalid email",
    }),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password must be at most 100 characters"),
  })
  .strict();

export type LoginBodyType = z.TypeOf<typeof LoginBody>;

export const RegisterBody = z
  .object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .max(100, { message: "Name must be at most 100 characters" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Invalid email",
    }),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password must be at most 100 characters"),
    confirm_password: z
      .string()
      .min(6, "Confirm password must be at least 6 characters")
      .max(100, "Confirm password must be at most 100 characters"),
  })
  .strict()
  .refine((values) => values.password === values.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>;
