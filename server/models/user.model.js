const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports.schema = UserSchema;
module.exports.model = mongoose.model("User", UserSchema);
