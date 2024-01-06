import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const submitFormHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onSaveForm(newExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveForm={submitFormHandler} />
    </div>
  );
};

export default NewExpense;
