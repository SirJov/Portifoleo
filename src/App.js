import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Logo/Header.js";
import { Nav } from "./Components/Header/Nav.js";
import { Home } from "./Pages/Home/Home.js";
import { Projects } from "./Pages/Projects/Projects.js";
import { Creating } from "./Pages/InCreation/InCreation.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <section className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/InCreation" element={<Creating />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
