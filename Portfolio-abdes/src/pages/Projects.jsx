import React from "react";
import Navbar from "../component/navbar";
import { motion } from "framer-motion";
import Carousel from "../component/Carousel";



const Projects = () => {
  const CARDS = 3;

  const Card = ({ imageUrl }) => (
    <div className='card'>
      <div>
      </div>
      {imageUrl && <img src={imageUrl} />}

    </div>
  );



  return (

    <div>
      <Navbar />
      <div className='projects-container'>
        <h1 className='projects-title'>Projects</h1>
        <Carousel>
          {[...new Array(CARDS)].map((_, i) => (
            <Card
              key={i}
              content='Lorem ipsum ...'
              imageUrl={`/card${1}.png`}
            />
          ))}
        </Carousel>


      </div>
    </div>
  );
};

export default Projects;
