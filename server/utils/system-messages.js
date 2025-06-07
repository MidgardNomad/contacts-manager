function getMessage(code) {
  return messages[code];
}

//Code and message
const messages = {
  //AUTH MESSAGES
  LOGIN_SUCSESS: "User has been logged in successfully.",
  NO_USER_FOUND: "User is not registered",
  INVALID_CREDENTIALS: "Invalid Credentials",
};

module.exports.getMessage = getMessage;
