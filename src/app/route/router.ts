import { Router } from "express";
import { userRouter } from "../modules/users/route";
import { authUser } from "../modules/Auth/route";
import { eyeglassRoutes } from "../modules/eyeGlass/route";

const router = Router();

const routerPath = [
  {
    path: "/users",
    element: userRouter,
  },
  {
    path: "/auth",
    element: authUser,
  },
  {
    path: "/eyeglass",
    element: eyeglassRoutes,
  },
];

routerPath.map((route) => router.use(route.path, route.element));

export default router;
