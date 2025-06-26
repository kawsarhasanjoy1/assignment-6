"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleToCastError = void 0;
const http_status_codes_1 = require("http-status-codes");
const handleToCastError = (err) => {
    const errorSource = [
        { path: err === null || err === void 0 ? void 0 : err.path, message: err === null || err === void 0 ? void 0 : err.message },
    ];
    return {
        statusCode: http_status_codes_1.StatusCodes.CONFLICT,
        message: "Invalid id",
        errorSource,
    };
};
exports.handleToCastError = handleToCastError;
