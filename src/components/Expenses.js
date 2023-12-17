import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import NewExpense from "./NewExpense";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <NewExpense />

      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
