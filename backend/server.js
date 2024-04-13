import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
import express from "express";

const app = express();
const port = process.env.devPORT || 1997;

app.get("/", (req, res) => {
  res.send("<h1>Hello World333</h1>");
});

const start = async () => {
  try {
    await app.listen(port, console.log(`Working ${port} on port`));
  } catch (error) {
    console.error(error);
  }
};

start();
