import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
  const submitFormHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log(newExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveForm={submitFormHandler} />
    </div>
  );
};

export default NewExpense;
