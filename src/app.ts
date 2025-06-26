import express from "express";
import cors from "cors";
import router from "./app/route/router";
import notFound from "./app/error/notFound";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
export const app = express();
export const port = 3000;
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", router);
app.use(notFound);
app.use(globalErrorHandler);
