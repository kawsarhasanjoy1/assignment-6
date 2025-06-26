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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const interface_1 = require("./interface");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
const AppError_1 = require("../../error/AppError");
const http_status_codes_1 = require("http-status-codes");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    profileImage: {
        type: String,
    },
    role: {
        type: String,
        enum: Object.keys(interface_1.USER_ROLE),
        default: interface_1.USER_ROLE.user,
    },
    status: {
        type: String,
        enum: ["in-progress", "blocked"],
        default: "in-progress",
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        this.password = yield bcrypt_1.default.hash(user === null || user === void 0 ? void 0 : user.password, Number(config_1.default.salt_rounds));
        next();
    });
});
// Instance Method to Compare Password
userSchema.statics.comparePassword = function (plainPassword, hashPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const comparePassword = yield bcrypt_1.default.compare(plainPassword, hashPassword);
        if (!comparePassword) {
            throw new AppError_1.AppError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "Password dose not match");
        }
    });
};
userSchema.statics.verifyUser = function (email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield exports.userModel.findOne({ email: email });
        if (!user) {
            throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, "This user is not found");
        }
        if (user.status == "blocked") {
            throw new AppError_1.AppError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "This user is blocked");
        }
        if (!user.isActive) {
            throw new AppError_1.AppError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "This user is deleted");
        }
        return user;
    });
};
exports.userModel = (0, mongoose_1.model)("User", userSchema);
