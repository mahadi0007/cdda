import "./App.css";

import ScrollToTop from "../src/components/scrollToTop";
import HomePage from "../src/pages/HomePage";
import CartPage from "../src/pages/CartPage";
import ThanksPage from "../src/pages/ThanksPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
