import Navbar from "../component/navbar";
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
        </Carousel></div>
      <div className="projectsDiv">
        {projectData.map((project) => (
          <div key={project.id} className="project">
            <div className="TextProjects"> <h2>{project.title}</h2>
              <div className="buttons">
                <button> <a href=""> Live </a></button>      <button> <a href=""> Git repo </a></button>  </div>
              <p>{project.description}</p></div>
            <div className="ImageProjects">
              <img src={project.imageUrl} /></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Projects;
