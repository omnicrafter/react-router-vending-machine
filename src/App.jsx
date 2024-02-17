import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chocolate from "./Chocolate";
import Gum from "./Gum";
import Pretzels from "./Pretzels";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/gum" element={<Gum />} />
          <Route path="/pretzels" element={<Pretzels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
