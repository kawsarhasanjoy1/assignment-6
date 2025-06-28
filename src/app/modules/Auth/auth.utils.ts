import jwt from "jsonwebtoken";
import { USER_ROLE } from "../users/interface";
import { StringValue } from "ms";
export const createToken = (
  jwtPayload: {
    id: any;
    email: string;
    role: keyof typeof USER_ROLE | undefined;
  },
  secret: string,
  expired: StringValue
) => {
  const token = jwt.sign(jwtPayload, secret, { expiresIn: expired });
  return token;
};
