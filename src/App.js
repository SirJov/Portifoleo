import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home.js";
import { Projects } from "./Pages/Projects/Projects.js";
import { Menu } from "./Components/Header/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
