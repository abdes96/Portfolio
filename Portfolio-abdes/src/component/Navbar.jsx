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

  const logo = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "#a88fe1",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
   
      fill: "#c3e7b0",
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }
  const logo1 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "#a88fe1",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      
      fill: "#a88fe1",
      transition: {
        duration: 4,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div  initial={{ y: -500, opacity: 0, scale: 0.5 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    transition={{
      duration: 0.4,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
    <nav className="navbar" >
      <div className="logo-container">
        <svg width="134" height="75" viewBox="0 0 134 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path variants={logo}
            initial="hidden"
            animate="visible" d="M37.4205 63H31.5114L48.6023 16.4545H54.4205L71.5114 63H65.6023L51.6932 23.8182H51.3295L37.4205 63ZM39.6023 44.8182H63.4205V49.8182H39.6023V44.8182Z" fill="none" />
          <motion.path variants={logo1}
            stroke="c3e7b0 "
            initial="hidden"
            animate="visible" d="M67.3239 59V12.4545H83.5966C86.839 12.4545 89.5133 13.0152 91.6193 14.1364C93.7254 15.2424 95.2936 16.7348 96.3239 18.6136C97.3542 20.4773 97.8693 22.5455 97.8693 24.8182C97.8693 26.8182 97.5133 28.4697 96.8011 29.7727C96.1042 31.0758 95.1799 32.1061 94.0284 32.8636C92.892 33.6212 91.6572 34.1818 90.3239 34.5455V35C91.7481 35.0909 93.1799 35.5909 94.6193 36.5C96.0587 37.4091 97.2633 38.7121 98.233 40.4091C99.2027 42.1061 99.6875 44.1818 99.6875 46.6364C99.6875 48.9697 99.1572 51.0682 98.0966 52.9318C97.036 54.7955 95.3617 56.2727 93.0739 57.3636C90.786 58.4545 87.8087 59 84.142 59H67.3239ZM72.9602 54H84.142C87.8239 54 90.4375 53.2879 91.983 51.8636C93.5436 50.4242 94.3239 48.6818 94.3239 46.6364C94.3239 45.0606 93.9223 43.6061 93.1193 42.2727C92.3163 40.9242 91.1723 39.8485 89.6875 39.0455C88.2027 38.2273 86.4451 37.8182 84.4148 37.8182H72.9602V54ZM72.9602 32.9091H83.4148C85.1117 32.9091 86.642 32.5758 88.0057 31.9091C89.3845 31.2424 90.4754 30.303 91.2784 29.0909C92.0966 27.8788 92.5057 26.4545 92.5057 24.8182C92.5057 22.7727 91.7936 21.0379 90.3693 19.6136C88.9451 18.1742 86.6875 17.4545 83.5966 17.4545H72.9602V32.9091Z" fill="none" />
        </svg>


      </div>
      <div id="menu-container" className={`menu-list ${isMenuOpen ? 'active' : ''}`}>
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
    </motion.div>
  );
};

export default Navbar;
