import Expenses from "./components/Expenses/Expenses";
import expenses from "./components/Expenses/dummyexpenses";
function App() {

  return (
    <div>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
