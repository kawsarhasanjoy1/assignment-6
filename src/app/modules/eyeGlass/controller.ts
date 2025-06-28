import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { eyeglassServices } from "./services";

const createEyeglass = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await eyeglassServices.createEyeglassIntoDb(data);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Eyeglass created successfully",
    data: result,
  });
});

const getAllEyeglasses = catchAsync(async (req: Request, res: Response) => {
  const result = await eyeglassServices.getAllEyeglassesFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Eyeglasses retrieved successfully",
    data: result,
  });
});

const getSingleEyeglass = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await eyeglassServices.getEyeglassByIdFromDb(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Eyeglass retrieved successfully",
    data: result,
  });
});

const updateEyeglass = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const result = await eyeglassServices.updateEyeglassInDb(id, data);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Eyeglass updated successfully",
    data: result,
  });
});

const deleteEyeglass = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await eyeglassServices.deleteEyeglassFromDb(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Eyeglass deleted successfully",
    data: result,
  });
});

export const eyeglassController = {
  createEyeglass,
  getAllEyeglasses,
  getSingleEyeglass,
  updateEyeglass,
  deleteEyeglass,
};
