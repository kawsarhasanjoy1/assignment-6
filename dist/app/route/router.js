"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_1 = require("../modules/users/route");
const route_2 = require("../modules/Auth/route");
const route_3 = require("../modules/eyeGlass/route");
const router = (0, express_1.Router)();
const routerPath = [
    {
        path: "/users",
        element: route_1.userRouter,
    },
    {
        path: "/auth",
        element: route_2.authUser,
    },
    {
        path: "/eyeglass",
        element: route_3.eyeglassRoutes,
    },
];
routerPath.map((route) => router.use(route.path, route.element));
exports.default = router;
