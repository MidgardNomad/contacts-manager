const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "users",
    statics: {
      findOnebyUserName(username) {
        return this.findOne({ username });
      },
    },
  }
);

module.exports.schema = UserSchema;
module.exports.model = mongoose.model("User", UserSchema);
