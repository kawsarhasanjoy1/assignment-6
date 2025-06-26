import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import { TErrorSource } from "../interface/error";

export const handleToCastError = (err: mongoose.Error.CastError) => {
  const errorSource: TErrorSource[] = [
    { path: err?.path, message: err?.message },
  ];

  return {
    statusCode: StatusCodes.CONFLICT,
    message: "Invalid id",
    errorSource,
  };
};
