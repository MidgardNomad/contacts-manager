//Third Party imports
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

//My utls
const connectMongoDB = require("./mongo-connect");

//Routes
const routes = require("./routes");

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Or '*'
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(cors());
app.use(bodyParser.json());

//ROUTES
// const authRoutes = require("./auth/auth.routes");
app.use("/api/", routes);

//init server
const PORT = 3000;
(async () => {
  try {
    const connection = await connectMongoDB();
    app.listen(PORT, () => {
      console.log(`Listening at ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
