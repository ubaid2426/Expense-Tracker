import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const titleChangeHandler = (event) => {
    setExpenseTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setExpenseAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setExpenseDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate),
    };
    setExpenseAmount("");
    setExpenseDate("");
    setExpenseTitle("");
    props.onSaveForm(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Add Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={expenseTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Add Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={expenseAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Add Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={expenseDate}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add New Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
