import express from "express";
import consign from "consign";
const PORT = 3001;
const app = express();

app.set("json spaces", 4);

consign()
  .include("db.js")
  .then("models")
  .then("libs/middleware.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);
