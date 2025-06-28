import config from "../../config";
import { userModel } from "../users/model";
import { createToken } from "./auth.utils";
import { TUserLogin } from "./interface";
import {StringValue} from 'ms'

const loginUser = async (payload: TUserLogin) => {
  const user = await userModel.verifyUser(payload.email);
  await userModel.comparePassword(payload?.password, user?.password as string);
  const jwtPayload = {
    id: user?._id,
    email: user?.email,
    role: user?.role,
  };
  const accessToken = await createToken(
    jwtPayload,
    config.access_token_secret as string,
    config.access_token_expired as StringValue
  );
  const refreshToken = await createToken(
    jwtPayload,
    config.refresh_token_secret as string,
    config.refresh_token_expired as StringValue
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const authServices = {
  loginUser,
};
