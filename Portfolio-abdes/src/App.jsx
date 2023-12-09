import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Navbar from "./component/navbar";

function App() {

  return (
    <>
    {Navbar}
      <Routes location={location} key={location.pathname}>
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<AboutMe />} />

      </Routes>
    </>
  );
}

export default App;
