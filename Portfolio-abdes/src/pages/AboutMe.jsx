import React from "react";
import Navbar from "../component/navbar";
import { motion } from "framer-motion";
import MySkills from "../component/Myskills";


const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      delay={{}}
    >
      <div>
        <Navbar />
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          delay={{}}
        >
          <div className="presentation">
            <div>
              <div id="me">
                <h1>About Me</h1>
                <div id="line"></div>

                <p >
                  Hello! I'm Abdeslam Boutaarourt, a dedicated Full-Stack Developer with a
                  passion for crafting digital solutions that make a difference. Currently
                  in my third and final year at Erasmus Hogeschool Brussel, studying
                  Multimedia & Creative Technology, I'm on an exciting journey to expand
                  my horizons and delve deeper into the world of technology.
                </p>
              </div>{" "}

              <motion.img
                initial={{ scale: 0 , rotate : 180 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay : 1,
                }}
                src="/image.png" alt="" 
              />

            </div>
            <div id="usercentricText">
              <p>My approach to development is driven by a deep desire to create user-centric experiences that not only meet but exceed expectations. I believe that technology should be a tool for positive change, and I'm excited to contribute my skills to projects that align with this philosophy.
                Outside of coding, you can often find me exploring new tech trends, collaborating on open-source projects, or simply enjoying a good cup of coffee while brainstorming innovative solutions.
                I'm enthusiastic about every project I undertake, and I'm constantly seeking opportunities to grow and learn in this ever-evolving field. Whether you're interested in collaborating, discussing tech trends, or just connecting, feel free to reach out—I'm always up for a good tech conversation!</p>
              <img id="usercentric" src="/usercentric.jpg" alt="" />

            </div>
            <MySkills />

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
