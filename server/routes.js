//EXPRESS APP
const express = require("express");
const routes = express.Router();

//Middleware
const authenticate = require("./middleware/authenticate");

//ROUTES
const authRoutes = require("./auth/auth.routes");

//Registering the routes
routes.use("/auth/", authenticate, authRoutes);

module.exports = routes;
