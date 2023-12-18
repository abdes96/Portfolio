import { Routes, Route } from "react-router-dom";

import "./App.css";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
