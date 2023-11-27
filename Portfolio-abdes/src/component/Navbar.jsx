import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav className="navbar">
      <div className="logo-container">
        <img src="/logo.svg" alt="Logo" className="logo" />
      </div>
      <ul className="navList">
        <li className="navItem">
          <Link to="/" className="navLink">
            About Me
          </Link>
        </li>
        <li className="navItem">
          <Link to="/contact" className="navLink">
            Contact
          </Link>
        </li>
        <li className="navItem">
          <Link to="/projects" className="navLink">
            Projects
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
