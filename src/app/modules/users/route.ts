import { Router } from "express";
import { userController } from "./controller";
import { userZodValidation } from "./user.zod.validation";
import { validateRequest } from "../../middleware/validateRequest";

const router = Router();

router.post(
  "/create-user",
  validateRequest(userZodValidation.createUserZodSchema),
  userController.createUser
);

export const userRouter = router;
