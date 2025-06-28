import { Schema, model } from 'mongoose';
import { TEyeglass } from './interface';

const eyeglassSchema = new Schema<TEyeglass>(
  {
    userId: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    name: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    type: { type: String, enum: ['sunglasses', 'reading', 'fashion', 'computer', 'bifocal', 'progressive'], required: true },
    frameMaterial: { type: String, required: true },
    frameShape: { type: String, required: true },
    frameColor: { type: String, required: true },
    lensMaterial: { type: String, required: true },
    lensType: { type: String, required: true },
    lensColor: { type: String, required: true },
    lensCoating: [String],
    gender: { type: String, enum: ['men', 'women', 'unisex', 'kids'], required: true },
    size: {
      lensWidth: Number,
      bridgeWidth: Number,
      templeLength: Number,
    },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    description: String,
    features: [String],
    imageUrls: [String],
  },
  { timestamps: true }
);

export const eyeglassModel = model<TEyeglass>('Eyeglass', eyeglassSchema);
