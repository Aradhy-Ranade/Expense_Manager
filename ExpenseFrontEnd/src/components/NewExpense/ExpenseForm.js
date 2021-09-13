import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userinput, setuserinput] = useState({
    title: "",
    amount: "",
    date: new Date(),
  });

  const ontitlechangeHandler = (event) => {
    setuserinput((pervalue) => {
      return {
        ...pervalue,
        title: event.target.value,
      };
    });
  };
  const onamountchangeHandler = (event) => {
    setuserinput((pervalue) => {
      return {
        ...pervalue,
        amount: event.target.value,
      };
    });
  };
  const ondatechangeHandler = (event) => {
    setuserinput((pervalue) => {
      return {
        ...pervalue,
        date: event.target.valueAsDate,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setuserinput({
      title: event.target.title.value,
      amount: +event.target.amount.value,
      date: event.target.date.valueAsDate,
    });
    props.onSaveExpenseData(userinput);
    setuserinput({
      title: "",
      amount: "",
      date: new Date(),
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            id="title"
            value={userinput.title}
            onChange={ontitlechangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            id="amount"
            value={userinput.amount}
            onChange={onamountchangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            onChange={ondatechangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
