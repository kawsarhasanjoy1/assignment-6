import jwt from "jsonwebtoken";
import config from "../config";
export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, config.access_token_secret as string);
  return decoded;
};
