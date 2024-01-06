import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import NewExpense from "./NewExpense";
import expenses from "./dummyexpenses";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
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
