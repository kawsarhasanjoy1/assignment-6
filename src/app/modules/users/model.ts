import { model, Schema } from "mongoose";
import { TUser, USER_ROLE, UserModelType } from "./interface";
import bcrypt from "bcrypt";
import config from "../../config";
import { AppError } from "../../error/AppError";
import { StatusCodes } from "http-status-codes";

const userSchema = new Schema<TUser, UserModelType>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profileImage: {
      type: String,
    },
    role: {
      type: String,
      enum: Object.keys(USER_ROLE),
      default: USER_ROLE.user,
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  this.password = await bcrypt.hash(user?.password, Number(config.salt_rounds));
  next();
});

// Instance Method to Compare Password
userSchema.statics.comparePassword = async function (
  plainPassword: string,
  hashPassword: string
) {
  const comparePassword = await bcrypt.compare(
    plainPassword,
    hashPassword as string
  );
  if (!comparePassword) {
    throw new AppError(StatusCodes.UNAUTHORIZED, "Password dose not match");
  }
};

userSchema.statics.verifyUser = async function (email: string) {
  const user = await userModel.findOne({ email: email });
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "This user is not found");
  }
  if (user.status == "blocked") {
    throw new AppError(StatusCodes.UNAUTHORIZED, "This user is blocked");
  }
  if (!user.isActive) {
    throw new AppError(StatusCodes.UNAUTHORIZED, "This user is deleted");
  }
  return user;
};

export const userModel = model<TUser, UserModelType>("User", userSchema);
