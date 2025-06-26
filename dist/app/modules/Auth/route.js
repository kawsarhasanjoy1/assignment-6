"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.post("/login-user", controller_1.authController.userLogin);
exports.authUser = router;
