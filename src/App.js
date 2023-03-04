import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home.js";
import { Projects } from "./Pages/Projects/Projects.js";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { Creating } from "./Pages/InCreation/InCreation.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/InCreation" element={<Creating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
