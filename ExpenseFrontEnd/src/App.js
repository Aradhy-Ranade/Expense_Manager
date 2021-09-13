import React, { useEffect, useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // const initialExpense = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Expense/")
      .then((res) => res.json())
      .then(
        (res) => {
          setExpense((prev) => {
            res.map((item) => {
              prev.push({
                id: item.id,
                title: item.title,
                amount: item.amount,
                date: new Date(item.date),
              });
              return 0;
            });
            return prev;
          });
        },
        (err) => {
          console.log("err");
        }
      );
  }, []);

  // console.log(gete);
  // console.log(expense);

  function postList(expenseadd) {
    fetch("http://localhost:5000/Expense/", {
      method: "POST",
      body: JSON.stringify(expenseadd),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (res) => {
          const expenseadded = {
            id: res.id,
            title: res.title,
            amount: res.amount,
            date: new Date(res.date),
          };
          setExpense((preExpense) => {
            return [expenseadded, ...preExpense];
          });
        },
        (err) => {
          console.log("err in post");
        }
      );

    console.log(JSON.stringify(expenseadd));
  }

  const addExpenseHandler = (expenseadd) => {
    // setExpense((preExpense) => {
    //   return [expenseadd, ...preExpense];
    // });

    postList(expenseadd);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expense={expense} />
    </div>
  );
}

export default App;
