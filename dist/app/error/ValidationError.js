"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationError = void 0;
const http_status_codes_1 = require("http-status-codes");
const validationError = (err) => {
    var _a;
    const errorSource = (_a = Object.values(err.errors)) === null || _a === void 0 ? void 0 : _a.map((value) => ({
        path: value === null || value === void 0 ? void 0 : value.path,
        message: value === null || value === void 0 ? void 0 : value.message,
    }));
    return {
        statusCode: http_status_codes_1.StatusCodes.CONFLICT,
        message: "Validation Error",
        errorSource,
    };
};
exports.validationError = validationError;
