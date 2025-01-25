import { z } from "zod";

export const UpdateMeBody = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, { message: "Name is required" })
      .max(256, { message: "Name must be at most 256 characters" }),
    email: z.string().email().optional(),
    avatar: z.string().url().optional(),
    is_two_factor_enabled: z.boolean().optional(),
  })
  .strict();

export type UpdateMeBodyType = z.TypeOf<typeof UpdateMeBody>;

export const ChangePasswordBody = z
  .object({
    old_password: z
      .string()
      .min(6, { message: "Old password must be at least 6 characters" })
      .max(100, { message: "Old password must be at most 100 characters" }),
    password: z
      .string()
      .min(6, { message: "New password must be at least 6 characters" })
      .max(100, { message: "New password must be at most 100 characters" }),
    confirm_password: z
      .string()
      .min(6, { message: "Confirm new password must be at least 6 characters" })
      .max(100, {
        message: "Confirm new password must be at most 100 characters",
      }),
  })
  .strict()
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: "custom",
        message: "New passwords do not match",
        path: ["confirm_password"],
      });
    }
  });

export type ChangePasswordBodyType = z.TypeOf<typeof ChangePasswordBody>;
