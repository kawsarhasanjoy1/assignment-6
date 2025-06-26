import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { userServices } from "./services";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await userServices.createUserIntoDb(data);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "user created successful",
    data: result,
  });
});

export const userController = {
  createUser,
};
