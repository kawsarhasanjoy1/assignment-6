import { Router } from "express";
import { userRouter } from "../modules/users/route";
import { authUser } from "../modules/Auth/route";

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
];

routerPath.map((route) => router.use(route.path, route.element));

export default router;
