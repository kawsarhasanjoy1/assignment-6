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
exports.auth = void 0;
const AppError_1 = require("../error/AppError");
const http_status_codes_1 = require("http-status-codes");
const verifyToken_1 = require("../route/verifyToken");
const model_1 = require("../modules/users/model");
const auth = (...userRole) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError_1.AppError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "you are not authorized");
        }
        let decoded;
        try {
            decoded = (0, verifyToken_1.verifyToken)(token);
        }
        catch (err) {
            throw new AppError_1.AppError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "you are not authorized");
        }
        const { email, userId, role, exp, iat } = decoded;
        yield model_1.userModel.verifyUser(email);
        if (userRole && !userRole.includes(role)) {
            throw new AppError_1.AppError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "you are not authorized");
        }
        req.user = decoded;
        next();
    });
};
exports.auth = auth;
