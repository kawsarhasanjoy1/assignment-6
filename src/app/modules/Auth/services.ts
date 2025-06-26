import { userModel } from "../users/model";
import { TUserLogin } from "./interface";

const loginUser = async (payload: TUserLogin) => {
  const user = await userModel.verifyUser(payload.email);
  await userModel.comparePassword(payload?.password, user?.password as string);
  const jwtPayload = {
    id: user?._id,
    email: user?.email,
    role: user?.role
  }
  return user;
};

export const authServices = {
  loginUser,
};
