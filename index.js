import express from "express";
import consign from "consign";
const app = express();

app.set("json spaces", 4);

consign()
  .include("libs/config.js")  
  .then("db.js")  
  .then("auth.js")
  .then("libs/middleware.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);

  module.exports = app;