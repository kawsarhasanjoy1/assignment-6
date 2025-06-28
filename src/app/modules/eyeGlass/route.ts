import { Router } from "express";
import { eyeglassController } from "./controller";
import { validateRequest } from "../../middleware/validateRequest";
import { eyeglassValidationSchema } from "./eyeGlass.zod.validation";
import { auth } from "../../middleware/auth";
import { USER_ROLE } from "../users/interface";

const router = Router();

router.post(
  "/",
  auth(USER_ROLE.manager),
  validateRequest(eyeglassValidationSchema),
  eyeglassController.createEyeglass
);
router.get("/", /*auth(),*/ eyeglassController.getAllEyeglasses);
router.get("/:id", /*auth(),*/ eyeglassController.getSingleEyeglass);
router.patch("/:id",auth(USER_ROLE.manager), eyeglassController.updateEyeglass);
router.delete("/:id", auth(USER_ROLE.manager) , eyeglassController.deleteEyeglass);

export const eyeglassRoutes = router;
