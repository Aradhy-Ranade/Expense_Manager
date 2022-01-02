import React, { useState, useEffect } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [flag, setflag] = useState(false);
  useEffect(() => {
    if (props.type === "credit") {
      setflag(true);
    }
  }, []);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.summary}</h2>
        {flag && (
          <div className="expense-item__price_green">+{props.amount}</div>
        )}
        {!flag && (
          <div className="expense-item__price_red">-{props.amount}</div>
        )}
      </div>
    </Card>
  );
}

export default ExpenseItem;
