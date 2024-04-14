// import path from "path";

import "dotenv/config";
// import dotenv from "dotenv";

// dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

import express from "express";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import connectionToDB from "./config/connectDB.js";
import { morganMiddleware, systemLogs } from "./utils/Logger.js";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(mongoSanitize());
app.use(morganMiddleware());

const port = process.env.devPORT || 1997;

app.get("/", (req, res) => {
  res.send("<h1>Hello World333</h1>");
});

const start = async () => {
  try {
    app.listen(port, console.log(`Working ${port} on port`));
    await connectionToDB();
    systemLogs.info(`Server running in ${process.env.NODE_ENV} ON ${port} `)
  } catch (error) {
    console.error(error);
  }
};

start();
