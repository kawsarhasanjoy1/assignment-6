"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
    port: process.env.PORT,
    mongoose_url: process.env.MONGOOSE_URL,
    salt_rounds: process.env.SALT_ROUNDS,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    access_token_expired: process.env.ACCESS_TOKEN_EXPIRED || "1d",
    refresh_token_secret: process.env.ACCESS_TOKEN_SECRET,
    refresh_token_expired: process.env.ACCESS_TOKEN_EXPIRED || "1d",
};
