import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrencyData from "./compoments/currencydata";
import Home from "./compoments/Home";
import Navbar from "./compoments/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/chart" element={<CurrencyData />} />
        </Routes>
     
      </BrowserRouter>
    </>
  );
}

export default App;
