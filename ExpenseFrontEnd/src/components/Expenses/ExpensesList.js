import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.expenseItem.length !== 0) {
    return (
      <ul className="expenses-list">
        {props.expenseItem.map((filteredExpenses) => (
          <ExpenseItem
            key={filteredExpenses.id}
            title={filteredExpenses.title}
            amount={filteredExpenses.amount}
            date={filteredExpenses.date}
          />
        ))}
        ;
      </ul>
    );
  } else return <p className="expenses-list__fallback">No Macth Found!</p>;
}
export default ExpensesList;
