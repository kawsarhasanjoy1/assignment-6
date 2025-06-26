"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userZodValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required",
    }),
    email: zod_1.z
        .string({
        required_error: "Email is required",
    })
        .email("Invalid email format"),
    password: zod_1.z
        .string({
        required_error: "Password is required",
    })
        .min(6, "Password must be at least 6 characters"),
    profileImage: zod_1.z.string().url("Profile image must be a valid URL").optional(),
    role: zod_1.z.enum(["user", "admin", "superAdmin"]).optional(),
    status: zod_1.z.enum(["in-progress", "blocked"]).optional(),
    isActive: zod_1.z.boolean().optional(),
});
exports.userZodValidation = {
    createUserZodSchema,
};
