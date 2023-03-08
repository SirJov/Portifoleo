import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/TopHeader/Header.js";
import { Nav } from "./Components/Header/Nav/Nav.js";
import { About } from "./Pages/About/About.js";
import { Projects } from "./Pages/Projects/Projects.js";
import { InCreation } from "./Pages/InCreation/InCreation.js";
import { Footer } from "./Components/Footer/Footer.js";

import "./App.css";

function App() {
  return (
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
  );
}

export default App;
