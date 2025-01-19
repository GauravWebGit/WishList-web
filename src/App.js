import "./App.css";
import Header from "./Componet/Header";
import Home from "./Container/Home";
import Wishlist from "./Container/Wishlist";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
