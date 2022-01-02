import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userinput, setuserinput] = useState({
    summary: "",
    amount: 0.0,
    type: "credit",
    date: new Date(),
  });

  const onsummarychangeHandler = (event) => {
    setuserinput((pervalue) => {
      return {
        ...pervalue,
        summary: event.target.value,
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
  const ontypechangeHandler = (event) => {
    setuserinput((pervalue) => {
      return {
        ...pervalue,
        type: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setuserinput((pervalue) => {
      return {
        ...pervalue,
        amount: event.target.amount.value,
        summary: event.target.summary.value,
        date: event.target.data.valueAsDate,
      };
    });
    // for till date issue is ot solve
    const isuserinput = {
      summary: userinput.summary,
      amount: parseFloat(userinput.amount),
      expensetype: userinput.type,
    };
    props.onSaveExpenseData(isuserinput);
    setuserinput({
      summary: "",
      amount: 0.0,
      type: "",
      date: new Date(),
    });
  };

  return (
    <form onSubmit={submitHandler} className="addform">
      <div className="add__control">
        <div className="holderl">
          <label>Amount</label>
        </div>
        <div className="holderin">
          <input
            type="float"
            min="1"
            id="amount"
            value={userinput.amount}
            onChange={onamountchangeHandler}
          />
        </div>
      </div>
      <div className="add__control">
        <div className="holderl">
          <label>Type</label>
        </div>
        <div className="holderin">
          <select
            id="type"
            value={userinput.type}
            onChange={ontypechangeHandler}
          >
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
      </div>
      <div className="add__control">
        <div className="holderl">
          <label>Date</label>
        </div>
        <div className="holderin">
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            onChange={ondatechangeHandler}
          />
        </div>
        <div className="add__control">
          <div className="holderl">
            <label>Summary</label>
          </div>
          <div className="holderin">
            <textarea
              type="text"
              id="summary"
              value={userinput.title}
              onChange={onsummarychangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="add__actions">
        <button type="button" onClick={props.oncancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
