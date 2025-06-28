import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../modules/users/interface";
import { AppError } from "../error/AppError";
import { StatusCodes } from "http-status-codes";
import { verifyToken } from "../route/verifyToken";
import { JwtPayload } from "jsonwebtoken";
import { userModel } from "../modules/users/model";

export const auth = (...userRole: TUserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "you are not authorized");
    }
    let decoded;
    try {
      decoded = verifyToken(token);
    } catch (err) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "you are not authorized");
    }
    const { email, userId, role, exp, iat } = decoded as JwtPayload;
    await userModel.verifyUser(email);
    if (userRole && !userRole.includes(role)) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "you are not authorized");
    }
    req.user = decoded as JwtPayload;
    next();
  };
};
