import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const titleChangeHandler = () => {
    setTitle();
  }
  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Add Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Add Amount</label>
        <input type="number" onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Add Date</label>
        <input
          type="date"
          min="2020-01-01"
          max="2023-12-31"
          onChange={dateChangeHandler}
        />
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add New Expense</button>
      </div>
    </div>
  );
};

export default ExpenseForm;
