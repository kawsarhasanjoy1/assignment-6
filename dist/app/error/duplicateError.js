"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateError = void 0;
const http_status_codes_1 = require("http-status-codes");
const duplicateError = (err) => {
    const keyValue = (err === null || err === void 0 ? void 0 : err.keyValue) || {};
    const errorSource = Object.entries(keyValue).map(([key, value]) => ({
        path: key,
        message: `${key} '${value}' already exists`,
    }));
    return {
        statusCode: http_status_codes_1.StatusCodes.CONFLICT,
        message: "Duplicate field error",
        errorSource,
    };
};
exports.duplicateError = duplicateError;
