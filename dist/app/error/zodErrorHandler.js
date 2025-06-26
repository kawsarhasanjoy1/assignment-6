"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodErrorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const zodErrorHandler = (err) => {
    var _a;
    const errorSource = (_a = err === null || err === void 0 ? void 0 : err.issues) === null || _a === void 0 ? void 0 : _a.map((issue) => ({
        path: issue === null || issue === void 0 ? void 0 : issue.path[issue.path.length - 1],
        message: issue === null || issue === void 0 ? void 0 : issue.message,
    }));
    return {
        statusCode: http_status_codes_1.StatusCodes.CONFLICT,
        message: "Validation Error",
        errorSource,
    };
};
exports.zodErrorHandler = zodErrorHandler;
