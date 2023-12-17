import Expenses from "./components/Expenses";
import expenses from "./components/dummyexpenses";
function App() {

  return (
    <div>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
