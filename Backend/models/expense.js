const mongoose = require("mongoose");

const Expense = mongoose.model("Expense", {
  id: { type: "String" },
  title: { type: "String" },
  amount: { type: "String" },
  date: { type: "Date" },
});

module.exports = { Expense: Expense };
