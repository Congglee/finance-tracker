import { z } from "zod";

export const CreateCategoryBody = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(256, { message: "Name must be at most 256 characters" }),
  icon: z.string().optional(),
});

export type CreateCategoryBodyType = z.TypeOf<typeof CreateCategoryBody>;

export const UpdateCategoryBody = CreateCategoryBody;

export type UpdateCategoryBodyType = CreateCategoryBodyType;
