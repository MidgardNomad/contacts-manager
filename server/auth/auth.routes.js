const express = require("express");
const app = express();
const { model } = require("../models/user.model");
const md5 = require("md5");

app.post("/login/", async () => {});

module.exports = app;
