const express = require("express");
const router = express.Router();

const { Expense } = require("../models/expense");

//retrive the data

router.get("/", (req, res) => {
  Expense.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "error in retrieving expense: " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post("/", (req, res) => {
  var expense = new Expense({
    id: req.body.id,
    title: req.body.title,
    amount: req.body.amount,
    date: req.body.date,
  });

  expense.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("error in save employee: " + JSON.stringify(err));
    }
  });
});

module.exports = router;
