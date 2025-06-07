const mongoose = require("mongoose");

function connectMongoDB() {
  return new Promise((resolve, reject) => {
    //Should use .env here :)
    mongoose
      .connect(
        "mongodb+srv://Mahmoud:sa26062016ra@manager.35oknlq.mongodb.net/manager-db?retryWrites=true&w=majority&appName=manager"
      )
      .then((res) => {
        console.log(`Connected To Monogo Successfully`);
        return resolve(res);
      })
      .catch((error) => {
        console.log(`Something went wrong while trying to connect to mongo`);
        return reject(error);
      });
  });
}

module.exports = connectMongoDB;
