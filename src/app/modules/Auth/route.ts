import { Router } from "express";
import { authController } from "./controller";

const router = Router();

router.post("/login-user", authController.userLogin);

export const authUser = router;
