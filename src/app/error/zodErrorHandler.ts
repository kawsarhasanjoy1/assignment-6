import { StatusCodes } from "http-status-codes";
import { ZodError, ZodIssue } from "zod";
import { TErrorSource } from "../interface/error";

export const zodErrorHandler = (err: ZodError) => {
 

  const errorSource: TErrorSource[] = err?.issues?.map((issue: ZodIssue) => ({
    path: issue?.path[issue.path.length - 1],
    message: issue?.message,
  }));

  return {
    statusCode: StatusCodes.CONFLICT,
    message: "Validation Error",
    errorSource,
  };
};
