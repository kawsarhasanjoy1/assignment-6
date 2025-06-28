import { StatusCodes } from "http-status-codes";
import { AppError } from "../../error/AppError";
import { userModel } from "../users/model";
import { TEyeglass } from "./interface";
import { eyeglassModel } from "./model";

const createEyeglassIntoDb = async (payload: TEyeglass) => {
  const user = await userModel.findOne({ _id: payload?.userId });
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "this user is not found");
  }
  const result = await eyeglassModel.create(payload);
  return result;
};

const getAllEyeglassesFromDb = async () => {
  return await eyeglassModel.find();
};

const getEyeglassByIdFromDb = async (id: string) => {
  return await eyeglassModel.findById(id);
};

const updateEyeglassInDb = async (id: string, payload: Partial<TEyeglass>) => {
  const {
    type,
    frameMaterial,
    frameShape,
    lensMaterial,
    lensType,
    gender,
    ...remaining
  } = payload;

  const modifiedData: Record<string, any> = { ...remaining };
  const product = await eyeglassModel.findOne({ _id: id });
  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, "this product is not found");
  }
  return await eyeglassModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteEyeglassFromDb = async (id: string) => {
  return await eyeglassModel.findByIdAndDelete(id);
};

export const eyeglassServices = {
  createEyeglassIntoDb,
  getAllEyeglassesFromDb,
  getEyeglassByIdFromDb,
  updateEyeglassInDb,
  deleteEyeglassFromDb,
};
