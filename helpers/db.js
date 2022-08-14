const mongoose = require("mongoose");
require("dotenv").config();

const dbVars = {
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASSWORD,
  dbURI: process.env.DB_URI,
};

module.exports = () => {
  mongoose.connect(`mongodb+srv://${dbVars.dbUser}:${dbVars.dbPass}@${dbVars.dbURI}`);
  mongoose.connection.on("open", () => {
    console.log("Connect to MongoDB was successfully");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Connection was fail: ", err);
  });
  mongoose.Promise = global.Promise;
};

// module.export = connect;
