//Third-party imports
const jwt = require("jsonwebtoken");
//This should be in .env :)
const jwt_secret = require("../config/secret-keys");

//This array contain endpoints that can be accessed without jwt
//This will be the login endpoint
const allowedAccess = ["/api/auth/login"];

function checkToken() {}

function authenticate(req, res, next) {
  if (allowedAccess.includes(req.originalUrl.toString())) {
    return next();
  }
}

module.exports = authenticate;
