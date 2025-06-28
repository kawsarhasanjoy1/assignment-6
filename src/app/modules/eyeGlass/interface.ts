import { Types } from "mongoose";
export type TGlassType =
  | "sunglasses"
  | "reading"
  | "fashion"
  | "computer"
  | "bifocal"
  | "progressive";
export type TFrameMaterial =
  | "metal"
  | "plastic"
  | "acetate"
  | "titanium"
  | "wood"
  | "mixed";
export type TFrameShape =
  | "round"
  | "rectangle"
  | "square"
  | "cat-eye"
  | "aviator"
  | "oval";
export type TLensMaterial = "glass" | "plastic" | "polycarbonate" | "trivex";
export type TLensType =
  | "single-vision"
  | "bifocal"
  | "progressive"
  | "blue-light"
  | "photochromic";
export type TGender = "men" | "women" | "unisex" | "kids";
export interface TEyeglass {
  userId: Types.ObjectId;
  name: string;
  brand: string;
  model: string;
  type: TGlassType;
  frameMaterial: TFrameMaterial;
  frameShape: TFrameShape;
  frameColor: string;
  lensMaterial: TLensMaterial;
  lensType: TLensType;
  lensColor: string;
  lensCoating?: string[];
  gender: TGender;
  size: {
    lensWidth: number;
    bridgeWidth: number;
    templeLength: number;
  };
  price: number;
  quantity: number;
  description?: string;
  features?: string[];
  imageUrls: string[];
}
