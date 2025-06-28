import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  mongoose_url: process.env.MONGOOSE_URL,
  salt_rounds: process.env.SALT_ROUNDS,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  access_token_expired: process.env.ACCESS_TOKEN_EXPIRED || "1d",
  refresh_token_secret: process.env.ACCESS_TOKEN_SECRET,
  refresh_token_expired: process.env.ACCESS_TOKEN_EXPIRED || "1d",
};
