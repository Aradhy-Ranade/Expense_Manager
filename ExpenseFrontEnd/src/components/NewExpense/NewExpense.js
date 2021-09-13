import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [needForm, setNeedForm] = useState(false);
  const setformconditionfalse = () => {
    setNeedForm(false);
  };
  const setformconditiontrue = () => {
    setNeedForm(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setformconditionfalse();
  };

  return (
    <div className="new-expense">
      {!needForm && (
        <button onClick={setformconditiontrue}>Add Expenses</button>
      )}
      {needForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          oncancel={setformconditionfalse}
        />
      )}
    </div>
  );
};

export default NewExpense;
