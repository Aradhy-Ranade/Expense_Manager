const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { mongoose } = require("./db.js");
const expenseController = require("./controller/expenseController.js");

const app = express();
app.use(bodyParser.json());

app.listen(5000, () => {
  console.log("listening at http://localhost:5000");
});

app.use(cors({ origin: "http://localhost:3000" }));
app.use("/Expense", expenseController);
