import express from "express";
import test from "./Routes/route";
import "reflect-metadata";
import dataSource from "./dataSource";
var cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());
app.use("/api", test);

dataSource
  .initialize()
  .then(function () {
    console.log("Database connected");
  })
  .catch(function (error) {
    console.log("Error: ", error);
  });

app.listen(3000, () => {
  console.log("Server online");
});
