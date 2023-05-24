import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/TopHeader/Header.js";
import { Nav } from "./Components/Header/Nav/Nav.js";
import { About } from "./Pages/About/About.js";
import { Projects } from "./Pages/Projects/Projects.js";
import { InCreation } from "./Pages/InCreation/InCreation.js";
import { Footer } from "./Components/Footer/Footer.js";

import ContextPagSelected from "./Context/ContextPageSelected.js";

import "./App.css";

function App() {
  const [PagSelected, SetPagSelected] = useState("About");
  return (
    <ContextPagSelected.Provider value={[PagSelected, SetPagSelected]}>
      <BrowserRouter>
        <Header />
        <Nav />
        <section className="container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/InCreation" element={<InCreation />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </ContextPagSelected.Provider>
  );
}

export default App;
