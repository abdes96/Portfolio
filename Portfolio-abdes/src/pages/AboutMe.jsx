import React from "react";
import Navbar from "../component/navbar";
import { motion } from "framer-motion";


const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      delay={{  }} 
    >
    <div>
      <Navbar />
      <div className="presentation">
      <h1>About Me</h1>
      <p >
        Hello! I'm Abdeslam Boutaarourt, a dedicated Full-Stack Developer with a
        passion for crafting digital solutions that make a difference. Currently
        in my third and final year at Erasmus Hogeschool Brussel, studying
        Multimedia & Creative Technology, I'm on an exciting journey to expand
        my horizons and delve deeper into the world of technology.
      </p>{" "}
      </div>
    </div>
    </motion.div>
  );
};

export default AboutMe;
