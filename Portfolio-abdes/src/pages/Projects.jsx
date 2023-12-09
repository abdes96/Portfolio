import React from "react";
import Navbar from "../component/navbar";
import { motion } from "framer-motion";
import Carousel from "../component/Carousel";
import projectData from '../../public/projectData.json'; 

const Projects = () => {

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
