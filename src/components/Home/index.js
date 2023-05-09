import React from 'react'
import './index.css';
import avatar from '../../assets/avatar.jpg';
import { FaFileDownload } from 'react-icons/fa';
import Resume  from '../../assets/CV-Diego-2023.pdf';
import { motion } from "framer-motion";

const Variants = {
  hidden: {
    opacity: 0,   
  },
  visible: {
    opacity: 1,  
    transition: {
      delay:1.5, 
      duration: 1.5,
      ease: "easeInOut",
    }
  }
};

const Home = () => {
  return (
    <div id="Home" className='flex-container direction-C'>
       <h1>Diego Mesa</h1>
       <p>Full Stack Developer</p>
       <motion.img src={avatar} alt="Avatar" className='avatar' variants={Variants}
          initial="hidden"
          animate="visible" />
       <a href={Resume}><button className="btn"><FaFileDownload/> Download CV</button></a>
    </div>
    
  )
}

export default Home