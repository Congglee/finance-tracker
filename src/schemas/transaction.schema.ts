import { z } from "zod";

export const CreateTransactionBody = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(256, { message: "Name must be at most 256 characters" }),
  amount: z.string(), // This will be converted to a number in the AmountInput component
  payee: z
    .string()
    .min(1, { message: "Payee is required" })
    .max(256, { message: "Payee must be at most 256 characters" }),
  notes: z.string().optional(),
  date: z.coerce.date(),
  categoryId: z
    .string()
    .transform((val) => (val === "" ? null : val))
    .pipe(z.string().uuid({ message: "Invalid category ID format" }).nullable())
    .optional(),
  accountId: z
    .string()
    .min(1, { message: "Account is required" })
    .uuid({ message: "Invalid account ID format" }),
});

export type CreateTransactionBodyType = z.TypeOf<typeof CreateTransactionBody>;

export const UpdateTransactionBody = CreateTransactionBody;

export type UpdateTransactionBodyType = CreateTransactionBodyType;
