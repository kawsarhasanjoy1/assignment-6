"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const zod_1 = require("zod");
const zodErrorHandler_1 = require("../error/zodErrorHandler");
const mongoose_1 = __importDefault(require("mongoose"));
const handleToCastError_1 = require("../error/handleToCastError");
const duplicateError_1 = require("../error/duplicateError");
const ValidationError_1 = require("../error/ValidationError");
const AppError_1 = require("../error/AppError");
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong";
    let errorSource = [{ path: "", message: "" }];
    if (err instanceof zod_1.ZodError) {
        const simplified = (0, zodErrorHandler_1.zodErrorHandler)(err);
        statusCode = simplified.statusCode;
        message = simplified.message;
        errorSource = simplified.errorSource;
    }
    else if (err instanceof mongoose_1.default.Error.CastError) {
        const simplified = (0, handleToCastError_1.handleToCastError)(err);
        statusCode = simplified.statusCode;
        message = simplified.message;
        errorSource = simplified.errorSource;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000 && (err === null || err === void 0 ? void 0 : err.keyValue)) {
        const simplified = (0, duplicateError_1.duplicateError)(err);
        statusCode = simplified.statusCode;
        message = simplified.message;
        errorSource = simplified.errorSource;
    }
    else if (err instanceof mongoose_1.default.Error.ValidationError) {
        const simplified = (0, ValidationError_1.validationError)(err);
        statusCode = simplified.statusCode;
        message = simplified.message;
        errorSource = simplified.errorSource;
    }
    else if (err instanceof AppError_1.AppError) {
        statusCode = err.statusCode;
        message = err.message;
        errorSource = [{ path: "", message: err.message }];
    }
    else if (err instanceof Error) {
        message = err.message;
        errorSource = [{ path: "", message: err.message }];
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorSource,
    });
};
exports.globalErrorHandler = globalErrorHandler;
