import React from "react";
import Navbar from "../component/navbar";
import { motion } from "framer-motion";
import Carousel from "../component/Carousel";
import projectData from '../../public/projectData.json'; 

const Projects = () => {
  const CARDS = 3;

  const Card = ({ imageUrl, content }) => (
    <div className='card'>
      {imageUrl && <img src={imageUrl} alt="Card Image" />}
      {imageUrl && <div className="description">{content}</div>}
    </div>
  );

  return (
    <div>
      <Navbar />
      <div className='projects-container'>
        <h1 className='projects-title'>Projects</h1>
        <Carousel>
          {projectData.map((project, index) => (
            <Card
              key={index}
              content={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
