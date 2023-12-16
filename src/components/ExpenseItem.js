import "./ExpenseItem.css";
const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div> December 16, 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">Rs. 4000/-</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
