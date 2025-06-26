import { Model } from "mongoose";

export const USER_ROLE = {
  user: "user",
  admin: "admin",
  superAdmin: "superAdmin",
} as const;
export interface TUser {
  _id?: any;
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  role?: keyof typeof USER_ROLE;
  status: "in-progress" | "blocked";
  isActive?: boolean;
}

export interface UserModelType extends Model<TUser> {
  verifyUser(email: string): Promise<TUser>;
  comparePassword(
    plainPassword: string,
    hashPassword: string
  ): Promise<boolean>;
}
