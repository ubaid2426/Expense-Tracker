import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2023, 11, 16),
      amount: 4000,
      title: "Car",
    },
    {
      id: "e2",
      date: new Date(2023, 10, 16),
      amount: 8000,
      title: "Bike",
    },
    {
      id: "e3",
      date: new Date(2023, 8, 16),
      amount: 9000,
      title: "Room",
    },
    {
      id: "e4",
      date: new Date(2023, 5, 16),
      amount: 7000,
      title: "Food",
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      />
    </div>
  );
}

export default App;
