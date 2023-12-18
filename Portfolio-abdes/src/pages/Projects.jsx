import Navbar from "../component/navbar";
import Carousel from "../component/Carousel";
import projectData from '../data/projectData.json';
import { motion } from "framer-motion";
import "./css/projects.css";

const Projects = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const Card = ({ imageUrl, content }) => (
    <div className='card'>
      {imageUrl && (
        <div className="image-container">
          <img src={imageUrl} alt="Card Image" className="image" />
          <div className="descriptionText">{content}</div>
        </div>
      )}
    </div>
  );

  const FadeInAnimationVariants = { initial: { opacity: 0, y: 300 }, animate: { opacity: 1, y: 0, }, }


  return (
    <div>
      <Navbar />
      <motion.div className='projects-container' initial={{ y: -500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
        <h1 className='projects-title'>Projects</h1>
        <Carousel
        >
          {projectData.map((project, index) => (
            <Card
              key={index}
              content={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </Carousel>

        <div className="arrow">
          <a href="#ImageProjects">
            <img src="/arow.gif" alt="" />
          </a>
        </div>

      </motion.div>
      <div className="projectsDiv">


        {projectData.map((project) => (
          <motion.div key={project.id} className="project"
            variants={FadeInAnimationVariants}
            initial="initial"
            whileInView="animate">
            <div className="TextProjects">
              <h2>{project.title}</h2>
              <div className="buttons">
                {project.url && <button><a href={project.url}>Live</a></button>}
                <button><a href={project.github}>Git repo</a></button>
              </div>
              <p>{project.description}</p>
            </div>
            <div id="ImageProjects" className="ImageProjects">
              <img src={project.imageUrl} /></div>
          </motion.div>
        ))}
      </div>
      <div>
        <img className="scrollToTop" onClick={scrollToTop} src="/arrow-up.gif" alt="" />
      </div>
    </div>
  );
};

export default Projects;
