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
          <div className="wrapper" >
            <motion.div className="presentation" initial={{ y: -500, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
              <div id="me">
                <div className="textAboutMe">
                  <div>
                    <h1>About Me</h1>

                    <p >
                      Hello! I'm Abdeslam Boutaarourt, a dedicated Full-Stack Developer with a
                      passion for crafting digital solutions that make a difference. Currently
                      in my third and final year at Erasmus Hogeschool Brussel, studying
                      Multimedia & Creative Technology, I'm on an exciting journey to expand
                      my horizons and delve deeper into the world of technology.
                    </p>
                  </div>
                </div>
              </div>
              <div id="imgMe">
                <img

                  src="/image.png" alt=""
                />
              </div>


            </motion.div>
            <motion.div
              id="usercentric"
              variants={FadeInAnimationVariants}
              initial="initial"
              whileInView="animate">

              <div id="textUsercentric">
                <div>
                  <p>
                    My approach to development is driven by a deep desire to create user-centric experiences that not only meet but exceed expectations. I believe that technology should be a tool for positive change, and I'm excited to contribute my skills to projects that align with this philosophy.
                  </p>
                  <p>
                    Outside of coding, you can often find me exploring new tech trends, collaborating on open-source projects, or simply enjoying a good cup of coffee while brainstorming innovative solutions.
                  </p>
                  <p>
                    I'm enthusiastic about every project I undertake, and I'm constantly seeking opportunities to grow and learn in this ever-evolving field. Whether you're interested in collaborating, discussing tech trends, or just connecting, feel free to reach out—I'm always up for a good tech conversation!
                  </p>
                </div>
              </div>
              <div id="usercentricImg">

                <img id="" src="/usercentric.jpg" alt="" />

              </div>

            </motion.div>
            <motion.div
              id="projects"
              variants={FadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
            >
              <div id="textProjects">
                <div>
                  <p>
                    I have worked on a number of projects, ranging from small personal projects to larger collaborative efforts. These projects have allowed me to gain hands-on experience and further develop my skills.
                  </p>
                  <button onClick={() => {/* Navigate to projects page */ }}>
                    More Info
                  </button>
                </div>
              </div>
            </motion.div>

            <MySkills />

          </div>
        </div>
      </div >
    </div >
  );
};

export default AboutMe;
