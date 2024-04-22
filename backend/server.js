import path from "path";

import "dotenv/config";
// import dotenv from "dotenv";

// dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

import express from "express";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import connectDB from "./config/connectDB.js";
import { systemLogs } from "./utils/Logger.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.get("/", (req, res) => res.send("<h1>Hello World 1235!!</h1>"));
const __dirname = path.resolve();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(mongoSanitize());
// app.use(morganMiddleware());

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "Hello Word" });
});
app.use("/api/v1/auth", authRoutes);
// console.log(555);

// console.log(process.env.MONGO_URI);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("<h1>Hello World</h1>"));
}

app.use(notFound);
app.use(errorHandler);
const port = process.env.devPORT || 1997;
const MONGO_URI = `mongodb://${process.env.MONGO_ROOT_USERNAME}:${process.env.MONGO_ROOT_PASSWORD}@mongodb/mernproject`;

const start = async () => {
  try {
    app.listen(port, console.log(`Working ${port} on port`));
    await connectDB(MONGO_URI);
    systemLogs.info(`Server running in ${process.env.NODE_ENV} ON ${port} `);
  } catch (error) {
    console.error(error);
  }
};

start();
