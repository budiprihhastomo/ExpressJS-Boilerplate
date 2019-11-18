"use strict";
require("dotenv/config");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

const routeNavigation = require("./src/index");
const PORT_SERVER = process.env.POST_SERVER || 3000;

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(morgan("tiny"))
  .use("/api/v1/", routeNavigation)

  .listen(PORT_SERVER, () =>
    console.log(`Server Running With Port : ${PORT_SERVER}`)
  );
