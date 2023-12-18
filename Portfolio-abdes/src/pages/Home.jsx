import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';
import githubLogo from '/github.png';
import linkedInLogo from '/linkedIn.webp';

const Home = () => {
    return (
        <motion.div className="welcome-page" >
            <div>
                <div className='ImgDiv'>
                    <img className='selfieMe' src="/ME2.jpg" alt="" />
                </div>
                <h1>Welcome to My Portfolio</h1>
                <p>
                    Welcome to my portfolio! I'm a student and web developer with a passion for creating efficient, scalable, and user-friendly solutions. With a strong foundation in JavaScript, React, and Node.js, I strive to stay up-to-date with the latest industry trends and technologies. Explore my projects to see my skills in action, or click 'About Me' to learn more about my journey .
                </p>
                <Link to="/aboutme">
                    <button> <h3>About Me </h3></button>
                </Link>
            </div>
            <div className='logos'>
                <motion.a whileHover={{ scale: 1.2, rotate: -90 , delay : 0.2 }} href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                </motion.a>
                <motion.a  whileHover={{ scale: 1.2, rotate: -90, borderRadius: "100%" }} href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                    <img src={linkedInLogo} alt="linkedIn Logo" className="linkedIn-logo" />
                </motion.a>
            </div>


        </motion.div>
    );
};

export default Home;