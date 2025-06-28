"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eyeglassModel = void 0;
const mongoose_1 = require("mongoose");
const eyeglassSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'user', required: true },
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
}, { timestamps: true });
exports.eyeglassModel = (0, mongoose_1.model)('Eyeglass', eyeglassSchema);
