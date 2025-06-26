import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { authServices } from "./services";

const userLogin = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await authServices.loginUser(data);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "user login successful",
    data: result,
  });
});

export const authController = {
  userLogin,
};
