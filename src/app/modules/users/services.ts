import { TUser } from "./interface";
import { userModel } from "./model";

const createUserIntoDb = async (payload: TUser) => {
  const result = await userModel.create(payload);
  return result;
};

export const userServices = {
  createUserIntoDb,
};
