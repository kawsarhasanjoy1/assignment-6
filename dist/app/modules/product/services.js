"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eyeglassServices = void 0;
const model_1 = require("./model");
const createEyeglassIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_1.eyeglassModel.create(payload);
    return result;
});
const getAllEyeglassesFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_1.eyeglassModel.find();
});
const getEyeglassByIdFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_1.eyeglassModel.findById(id);
});
const updateEyeglassInDb = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_1.eyeglassModel.findByIdAndUpdate(id, data, { new: true });
});
const deleteEyeglassFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_1.eyeglassModel.findByIdAndDelete(id);
});
exports.eyeglassServices = {
    createEyeglassIntoDb,
    getAllEyeglassesFromDb,
    getEyeglassByIdFromDb,
    updateEyeglassInDb,
    deleteEyeglassFromDb,
};
