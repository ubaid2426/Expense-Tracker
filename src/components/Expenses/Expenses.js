import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import NewExpense from "../New Expense/NewExpense";
import expenses from "./dummyexpenses";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);
  const [expensesData, setExpensesData] = useState(expenses);
  const submitFormHandler = (expenseData) => {
    setExpensesData((prevData) => [expenseData, ...prevData]);
  };
  const filteredYearHandler = (filterData) => {
    setFilteredYear(filterData);
  };

  const filterYearData = expensesData.filter(
    (filterexpense) =>
      filterexpense.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <NewExpense onSaveForm={submitFormHandler} />
      <ExpenseChart datapoints={filterYearData} />
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filteredYearHandler}
      />
      {filterYearData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
