import React from "react";
import Navbar from "../component/navbar";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0 , x : -200}}
    animate={{ opacity: 1 , x : 0 }}
    exit={{ opacity: 0 }}
    delay={{}}
  >
      <div>
        <Navbar />
        <h2>Contact</h2>
        <p>This is the contact page. You can customize the content here.</p>
      </div>
    </motion.div>
  );
};

export default Contact;
