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
      .trim()
      .min(2, { message: "Name is required" })
      .max(256, { message: "Name must be at most 256 characters" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Invalid email",
    }),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password must be at most 100 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters")
      .max(100, "Confirm password must be at most 100 characters"),
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>;
