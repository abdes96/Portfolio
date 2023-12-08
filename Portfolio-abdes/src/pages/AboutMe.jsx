import React from "react";
import Navbar from "../component/navbar";
import { motion } from "framer-motion";
import MySkills from "../component/Myskills";


const AboutMe = () => {

  const FadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 300
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <div

    >
      <div>
        <Navbar />
        <div

        >
          <div className="presentation">
            <motion.div initial={{ y: -500, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
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
              <img

                src="/image.png" alt=""
              />

            </motion.div>
            <motion.div
              id="usercentricText"
              variants={FadeInAnimationVariants}
              initial="initial"
              whileInView="animate">

              <p>My approach to development is driven by a deep desire to create user-centric experiences that not only meet but exceed expectations. I believe that technology should be a tool for positive change, and I'm excited to contribute my skills to projects that align with this philosophy.
                Outside of coding, you can often find me exploring new tech trends, collaborating on open-source projects, or simply enjoying a good cup of coffee while brainstorming innovative solutions.
                I'm enthusiastic about every project I undertake, and I'm constantly seeking opportunities to grow and learn in this ever-evolving field. Whether you're interested in collaborating, discussing tech trends, or just connecting, feel free to reach out—I'm always up for a good tech conversation!</p>
              <img id="usercentric" src="/usercentric.jpg" alt="" />

            </motion.div>
           
            <MySkills />

          </div>
        </div>
      </div >
    </div >
  );
};

export default AboutMe;
