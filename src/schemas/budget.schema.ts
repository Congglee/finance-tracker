import { z } from "zod";

export const CreateBudgetBody = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Name is required" })
      .max(256, { message: "Name must be at most 256 characters" }),

    // This will be converted to a number in the AmountInput component
    amount: z
      .string({ message: "Amount must be a number" })
      .min(1, { message: "Amount is required" }),
    spent: z
      .string({ message: "Spent must be a number" })
      .min(1, { message: "Spent is required" }),

    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),

    // TODO: Features to be implemented in the future
    // periodType: z.enum(["daily", "weekly", "monthly", "yearly"]),
    // recurring: z.boolean(),
    // notificationThreshold: z.number().optional(),

    categoryId: z
      .string()
      .min(1, { message: "Category is required" })
      .uuid({ message: "Invalid category ID format" }),
  })
  .superRefine((data, ctx) => {
    if (data.startDate && data.endDate && data.startDate > data.endDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "End date cannot be less than start date",
        path: ["endDate"],
      });
    }

    if (data.startDate && !data.endDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Both start date and end date must be set together",
        path: ["startDate"],
      });
    }

    if (data.endDate && !data.startDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Both start date and end date must be set together",
        path: ["endDate"],
      });
    }
  });

export type CreateBudgetBodyType = z.TypeOf<typeof CreateBudgetBody>;

export const UpdateBudgetBody = CreateBudgetBody;

export type UpdateBudgetBodyType = CreateBudgetBodyType;
