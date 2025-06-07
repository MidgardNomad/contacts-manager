//UtiLs imports
const getMessage = require(`../utils/system-messages`).getMessage;

function success(res, messageCode, status, data) {
  const message = getMessage(messageCode);
  return res.status(status).send({
    status,
    data,
    message,
    messageCode,
  });
}

function failed(res, messageCode, status, error) {
  const message = getMessage(messageCode);
  return res.status(status).send({
    message,
    error,
    messageCode,
    status,
  });
}

module.exports = {
  success,
  failed,
};
