import React, { useState } from "react";
import "./Expense.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChat from "./ExpenseChart";

function Expense(props) {
  const [datafromFilter, setdatafromFilter] = useState("2019");

  const onselectdataHandler = (selecteddata) => {
    setdatafromFilter(selecteddata);
  };

  function checkYear(item) {
    const date = new Date(item.date);
    if (date.toLocaleString("en-US", { year: "numeric" }) === datafromFilter) {
      return true;
    }

    return false;
  }

  const filteredExpenses = props.expense.filter(checkYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          ondatafromFilter={datafromFilter}
          onselectdata={onselectdataHandler}
        />
        <ExpenseChat expenses={filteredExpenses} />
        <ExpensesList expenseItem={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expense;
