//Third-Party imports
const express = require("express");
const app = express();

//Controller
const authContoller = require("./auth.controller");

app.post("/login/", authContoller.login);

module.exports = app;
