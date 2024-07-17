import { CurrencyDollarSimple } from "@phosphor-icons/react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <header className="flex align-middle">
        <CurrencyDollarSimple size={32} />
        <h1>Expenses Tracker</h1>
        <Button>Add Transaction</Button>
      </header>
    </>
  );
}

export default App;
