import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const listItemVariants = {
    hover: { scale: 1.2, rotate: 90 },
    tap: { scale: 0.8, rotate: -90, borderRadius: "100%" }
  };

  return (
    <motion.nav className="navbar">
      <div className="logo-container">
        <img src="/logo.svg" alt="Logo" className="logo" />
      </div>
      <ul className="navList">

        <motion.li
          whileHover={listItemVariants.hover}
          whileTap={listItemVariants.tap}
          className="navItem"
        >
          <Link to="/" className="navLink">
            About Me
          </Link>
        </motion.li>

        <motion.li
          whileHover={listItemVariants.hover}
          whileTap={listItemVariants.tap}
          className="navItem"
        >
          <Link to="/projects" className="navLink">
            Projects
          </Link>
        </motion.li>
        <motion.li
          whileHover={listItemVariants.hover}
          whileTap={listItemVariants.tap}
          className="navItem"
        >
          <Link to="/contact" className="navLink">
            Contact
          </Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
