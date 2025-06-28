"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eyeglassValidationSchema = void 0;
const zod_1 = require("zod");
exports.eyeglassValidationSchema = zod_1.z.object({
    userId: zod_1.z.string().min(1, "userId is required"), // ObjectId as string
    name: zod_1.z.string().min(1, "Name is required"),
    brand: zod_1.z.string().min(1, "Brand is required"),
    model: zod_1.z.string().min(1, "Model is required"),
    type: zod_1.z.enum([
        "sunglasses",
        "reading",
        "fashion",
        "computer",
        "bifocal",
        "progressive",
    ]),
    frameMaterial: zod_1.z.string().min(1, "Frame material is required"),
    frameShape: zod_1.z.string().min(1, "Frame shape is required"),
    frameColor: zod_1.z.string().min(1, "Frame color is required"),
    lensMaterial: zod_1.z.string().min(1, "Lens material is required"),
    lensType: zod_1.z.string().min(1, "Lens type is required"),
    lensColor: zod_1.z.string().min(1, "Lens color is required"),
    lensCoating: zod_1.z.array(zod_1.z.string()).optional(),
    gender: zod_1.z.enum(["men", "women", "unisex", "kids"]),
    size: zod_1.z
        .object({
        lensWidth: zod_1.z.number().optional(),
        bridgeWidth: zod_1.z.number().optional(),
        templeLength: zod_1.z.number().optional(),
    })
        .optional(),
    price: zod_1.z.number().min(0, "Price must be non-negative"),
    quantity: zod_1.z.number().min(0, "Quantity must be non-negative"),
    description: zod_1.z.string().optional(),
    features: zod_1.z.array(zod_1.z.string()).optional(),
    imageUrls: zod_1.z.array(zod_1.z.string().url()).optional(),
});
