import { NextFunction, Request, Response } from "express";
import { TErrorSource } from "../interface/error";
import { ZodError } from "zod";
import { zodErrorHandler } from "../error/zodErrorHandler";
import mongoose from "mongoose";
import { handleToCastError } from "../error/handleToCastError";
import { duplicateError } from "../error/duplicateError";
import { validationError } from "../error/ValidationError";
import { AppError } from "../error/AppError";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = err?.message || "Something went wrong";
  let errorSource: TErrorSource[] = [{ path: "", message: "" }];

  if (err instanceof ZodError) {
    const simplified = zodErrorHandler(err);
    statusCode = simplified.statusCode;
    message = simplified.message;
    errorSource = simplified.errorSource;
  } else if (err instanceof mongoose.Error.CastError) {
    const simplified = handleToCastError(err);
    statusCode = simplified.statusCode;
    message = simplified.message;
    errorSource = simplified.errorSource;
  } else if (err?.code === 11000 && err?.keyValue) {
    const simplified = duplicateError(err);
    statusCode = simplified.statusCode;
    message = simplified.message;
    errorSource = simplified.errorSource;
  } else if (err instanceof mongoose.Error.ValidationError) {
    const simplified = validationError(err);
    statusCode = simplified.statusCode;
    message = simplified.message;
    errorSource = simplified.errorSource;
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errorSource = [{ path: "", message: err.message }];
  } else if (err instanceof Error) {
    message = err.message;
    errorSource = [{ path: "", message: err.message }];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSource,
  });
};
