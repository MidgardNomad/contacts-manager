//Third-party imports
const md5 = require("md5");
const jwt = require("jsonwebtoken");

//My Utils
const User = require("../models/user.model").model;
const responder = require("../middleware/system-response");
const jwt_secret = require("../config/secret-keys").jwt_secret;

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOnebyUserName(username);
    if (!user) {
      return responder.failed(res, "NO_USER_FOUND", 404, `User doesn't exist`);
    }
    if (md5(password) !== user.password) {
      return responder.failed(
        res,
        "INVALID_CREDENTIALS",
        401,
        "Invaild credentials"
      );
    }
    const token = jwt.sign({ username, password }, jwt_secret, {
      expiresIn: "7d",
    });

    return responder.success(res, "LOGIN_SUCSESS", 200, { token });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  login,
};
