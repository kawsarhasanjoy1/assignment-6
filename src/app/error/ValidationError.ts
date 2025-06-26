import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import { TErrorSource } from "../interface/error";

export const validationError = (err: mongoose.Error.ValidationError) => {
  const errorSource: TErrorSource[] = Object.values(err.errors)?.map(
    (value) => ({
      path: value?.path,
      message: value?.message,
    })
  );

  return {
    statusCode: StatusCodes.CONFLICT,
    message: "Validation Error",
    errorSource,
  };
};
