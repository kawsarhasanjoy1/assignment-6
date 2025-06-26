import { StatusCodes } from "http-status-codes";
import { TErrorSource } from "../interface/error";

export const duplicateError = (err: any) => {
  const keyValue = err?.keyValue || {};

  const errorSource: TErrorSource[] = Object.entries(keyValue).map(
    ([key, value]) => ({
      path: key,
      message: `${key} '${value}' already exists`,
    })
  );

  return {
    statusCode: StatusCodes.CONFLICT,
    message: "Duplicate field error",
    errorSource,
  };
};
