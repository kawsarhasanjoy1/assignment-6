import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { authServices } from "./services";

const userLogin = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const { accessToken, refreshToken } = await authServices.loginUser(data);
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax", // or "none" if cross-origin
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "user login successful",
    data: { accessToken },
  });
});

export const authController = {
  userLogin,
};
