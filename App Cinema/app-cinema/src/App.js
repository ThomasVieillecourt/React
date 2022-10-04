import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Like from "./pages/Like";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/collection" element={<Like />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
