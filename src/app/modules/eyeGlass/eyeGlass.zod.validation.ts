import { z } from "zod";

export const eyeglassValidationSchema = z.object({
  userId: z.string().min(1, "userId is required"), // ObjectId as string
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  model: z.string().min(1, "Model is required"),
  type: z.enum([
    "sunglasses",
    "reading",
    "fashion",
    "computer",
    "bifocal",
    "progressive",
  ]),
  frameMaterial: z.string().min(1, "Frame material is required"),
  frameShape: z.string().min(1, "Frame shape is required"),
  frameColor: z.string().min(1, "Frame color is required"),
  lensMaterial: z.string().min(1, "Lens material is required"),
  lensType: z.string().min(1, "Lens type is required"),
  lensColor: z.string().min(1, "Lens color is required"),
  lensCoating: z.array(z.string()).optional(),
  gender: z.enum(["men", "women", "unisex", "kids"]),
  size: z
    .object({
      lensWidth: z.number().optional(),
      bridgeWidth: z.number().optional(),
      templeLength: z.number().optional(),
    })
    .optional(),
  price: z.number().min(0, "Price must be non-negative"),
  quantity: z.number().min(0, "Quantity must be non-negative"),
  description: z.string().optional(),
  features: z.array(z.string()).optional(),
  imageUrls: z.array(z.string().url()).optional(),
});
