const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ExpenseManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose is up..");
  });

module.exports = mongoose;
