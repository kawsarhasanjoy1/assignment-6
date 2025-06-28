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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eyeglassServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = require("../../error/AppError");
const model_1 = require("../users/model");
const model_2 = require("./model");
const createEyeglassIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield model_1.userModel.findOne({ _id: payload === null || payload === void 0 ? void 0 : payload.userId });
    if (!user) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, "this user is not found");
    }
    const result = yield model_2.eyeglassModel.create(payload);
    return result;
});
const getAllEyeglassesFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_2.eyeglassModel.find();
});
const getEyeglassByIdFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_2.eyeglassModel.findById(id);
});
const updateEyeglassInDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, frameMaterial, frameShape, lensMaterial, lensType, gender } = payload, remaining = __rest(payload, ["type", "frameMaterial", "frameShape", "lensMaterial", "lensType", "gender"]);
    const modifiedData = Object.assign({}, remaining);
    const product = yield model_2.eyeglassModel.findOne({ _id: id });
    if (!product) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, "this product is not found");
    }
    return yield model_2.eyeglassModel.findByIdAndUpdate(id, payload, { new: true });
});
const deleteEyeglassFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield model_2.eyeglassModel.findByIdAndDelete(id);
});
exports.eyeglassServices = {
    createEyeglassIntoDb,
    getAllEyeglassesFromDb,
    getEyeglassByIdFromDb,
    updateEyeglassInDb,
    deleteEyeglassFromDb,
};
