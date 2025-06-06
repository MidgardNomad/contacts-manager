const express = require("express");
const app = express();

//init server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
