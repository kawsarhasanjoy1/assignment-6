import { z } from "zod";

const createUserZodSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email format"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters"),
  profileImage: z.string().url("Profile image must be a valid URL").optional(),
  role: z.enum(["user", "admin", "superAdmin"]).optional(),
  status: z.enum(["in-progress", "blocked"]).optional(),
  isActive: z.boolean().optional(),
});

export const userZodValidation = {
  createUserZodSchema,
};
