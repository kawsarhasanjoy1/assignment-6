import mongoose from "mongoose";
import { app } from "./app";
import config from "./app/config";

async function main() {
  await mongoose.connect(config.mongoose_url as string);
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}
main().catch((err) => console.log(err));
