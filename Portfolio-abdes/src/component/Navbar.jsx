import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const listItemVariants = {
    hover: { scale: 1.2, rotate: 90 },
    tap: { scale: 0.8, rotate: -90, borderRadius: "100%" }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slideMenu = () => {
    const menuList = document.querySelector("#menu-container .menu-list");

    if (menuList) {
      setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    }
  };

  useEffect(() => {
    const menuList = document.querySelector("#menu-container .menu-list");
    const menuContainer = document.querySelector("#menu-container");

    if (menuList) {
      menuList.style.right = isMenuOpen ? "0" : "-100%";

    }

    if (menuContainer) {
      menuContainer.style.overflow = !isMenuOpen ? "hidden" : "";
      menuContainer.style.position = !isMenuOpen ? "relative" : "";
    }
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");

    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);

    if (hamburgerMenu) {
      hamburgerMenu.classList.toggle("open");
    }

    document.body.classList.toggle("overflow-hidden");
  };


  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo.svg" alt="Logo" className="logo" />
      </div>
      <div id="menu-container"  className={`menu-list ${isMenuOpen ? 'active' : ''}`}>
        <div id="menu-wrapper">
          <div id="hamburger-menu" onClick={handleMenuClick}
          ><span>
            </span>
            <span>
            </span>
            <span>
            </span>
          </div>
        </div>
        <ul className="menu-list accordion">
          <li id="nav1" className="toggle accordion-toggle">
            <Link to="/">
            About Me
          </Link>
          </li>
          <li id="nav2" className="toggle accordion-toggle">
            <Link to="/projects">
            Projects
          </Link>
          </li>
          <li id="nav2" className="toggle accordion-toggle">
            <Link to="/contact">
            Contact
          </Link>
          </li>


        </ul>
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
    </nav>
  );
};

export default Navbar;
