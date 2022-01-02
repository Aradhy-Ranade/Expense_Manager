import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import LoginPage from "./components/Home/LoginPage";
import LogoutBar from "./components/Home/LogoutBar";

function App() {
  const [valid, setValid] = useState(false);
  const [expense, setExpense] = useState([]);
  const [profile, setprofile] = useState([]);

  async function getalldata(tokenin) {
    try {
      const response = await fetch("http://localhost:1000/api/expense/all", {
        headers: {
          token: tokenin,
        },
      });
      if (!response.ok) {
        alert("Something went wrong");
      } else {
        const res = await response.json();
        setExpense((prev) => {
          prev = [];
          res.map((item) => {
            prev.push({
              amount: item.amount.$numberDecimal,
              summary: item.summary,
              expensetype: item.expensetype,
              date: new Date(),
            });
            return 0;
          });
          return prev;
        });
        setValid(true);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  }

  async function getprofile(token) {
    try {
      const response = await fetch("http://localhost:1000/api/profile", {
        headers: {
          token: token,
        },
      });
      if (!response.ok) {
        alert("Something is wrong");
      } else {
        const res = await response.json();
        setprofile(res);
      }
    } catch (error) {
      alert(error);
    }
  }

  const setvalidtrue = (token) => {
    getalldata(token);
    getprofile(token);
  };

  const setvalidfalse = () => {
    localStorage.removeItem("token");
    setValid(false);
  };

  async function postList(expenseadd) {
    try {
      const response = await fetch("http://localhost:1000/api/expense/add", {
        method: "POST",
        body: JSON.stringify(expenseadd),
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
      if (!response.ok) {
        const res = await response.json();
        alert(res.message);
      } else {
        const res = await response.json();
        alert(res.message);
        getalldata(localStorage.getItem("token"));
        getprofile(localStorage.getItem("token"));
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  }

  const addExpenseHandler = (expenseadd) => {
    postList(expenseadd);
  };

  return (
    <div>
      {valid && (
        <LogoutBar
          logoutit={setvalidfalse}
          fname={profile.firstName}
          lname={profile.lastName}
        />
      )}
      {valid && <NewExpense onAddExpense={addExpenseHandler} />}
      {valid && (
        <Expense
          expense={expense}
          totalbal={profile.currentBalance.$numberDecimal}
        />
      )}
      {!valid && <LoginPage validit={setvalidtrue} />}
    </div>
  );
}

export default App;
