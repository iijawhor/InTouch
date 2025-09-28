import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use((err, req, res, next) => {
  console.log("error in app.js....", err);
  res
    .status(err.statusCode || 500)
    .json({ success: false, message: err.message || "Internal server error" });
});

export { app };
