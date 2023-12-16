import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';

const Home = () => {
    return (
        <motion.div className="welcome-page" >
            <h1>Welcome to My Portfolio</h1>
            <p>
                Welcome to my portfolio! I'm a dedicated software developer with a passion for creating efficient, scalable, and user-friendly solutions. With a strong foundation in JavaScript, React, and Node.js, I strive to stay up-to-date with the latest industry trends and technologies. Explore my projects to see my skills in action, or click 'About Me' to learn more about my journey and experiences in the tech industry.
            </p>            <Link to="/">
                <button>About Me</button>
            </Link>
        </motion.div>
    );
};

export default Home;
