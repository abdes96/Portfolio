import { motion } from "framer-motion";

const MySkills = () => {

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
    <motion.div className="mySkills"

      variants={FadeInAnimationVariants}
      initial="initial"
      whileInView="animate">
      <div className="MySkillstext">
        <div id="line"></div>
        <div className="introSkills">
          <h1>My Skills</h1>

          <p >My journey as a developer has equipped me with a versatile skill set that includes:</p>
          <ul>
            <li>
              <h3>JavaScript:</h3> My go-to language for creating dynamic
              and interactive web applications
            </li>
            <li>
              <h3>React:</h3> I'm well-versed in building modern,
              single-page applications with the React library.
            </li>
            <li>
              <h3>React Native:</h3> I've explored the world of mobile app
              development, creating cross-platform solutions with React Native.
            </li>
            <li>
              <h3>Laravel:</h3> As a PHP framework, Laravel has been a
              valuable tool in my toolkit for building a robust  web application.
            </li>
            <li>
              <h3>PHP:</h3> I have a strong foundation in PHP, allowing me
              to develop server-side logic with ease.
            </li>
            <li>
              <h3>SQL:</h3> Database management and querying are second
              nature to me, thanks to my proficiency in SQL.
            </li>
            <li>
              <h3>HTML & CSS:</h3> Crafting clean and responsive front-end
              interfaces is something I enjoy, utilizing HTML and CSS to bring
              designs to life.
            </li>
            <li>
              <h3>Tailwind CSS:</h3> I'm skilled in using Tailwind CSS to
              expedite the process of styling and creating beautiful, user-friendly
              interfaces.
            </li>
          </ul>
        </div>
      </div>
      <div className="column">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }}
          className="logo-container">
          <img src="skills/vite.svg" alt="Vite" />
          <p>Vite</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }}
          className="logo-container">
          <img src="skills/react.png" alt="React" />
          <p>React</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }}
          className="logo-container">
          <img src="skills/node.png" alt="Node.js" />
          <p>Node.js</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }}
          className="logo-container">
          <img src="skills/js.png" alt="JavaScript" />
          <p>JavaScript</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }}
          className="logo-container">
          <img src="skills/html.png" alt="HTML" />
          <p>HTML</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }}
          className="logo-container">
          <img src="skills/css.webp" alt="HTML" />
          <p>CSS</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }}
          className="logo-container">
          <img id="sql" src="skills/sql.svg" alt="SQL" />
          <p>SQL</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }}
          className="logo-container">
          <img src="skills/laravel.png" alt="Laravel" />
          <p>Laravel</p>
        </motion.div>
      </div>




    </motion.div >
  );
};

export default MySkills;
