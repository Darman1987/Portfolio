import React from 'react'
import './index.css';
import {motion} from "framer-motion";

const About =() =>{
 
  const Variants = {
    hidden: {     
      x:'-100px',          
    },
    visible: {    
      x:'0px',            
      transition: {        
        duration: 1.5,
        ease: "easeInOut",
      }
    }
  };
  return (
    <div id="About">
    <div className='flex-container flex-S'>
           <h2>About Me</h2>
           <p>Software Developer with 5 years of experience, developing, analyzing, testing, and maintaining web application development based on PHP, SQL Server, MySQL, JavaScript, jQuery, CSS, and Bootstrap.
           As part of my previous roles, I am familiar with the following frameworks/technologies React, Vuejs, Angular, Python, Nodejs, C#, Laravel, CSS3, REST API, CMS, Git, SCRUM methodology, Cordova, Ionic, Excel, Power BI, Linux, Adobe suite, Figma and Unity.</p>
                  
    </div>
    <div className='flex-container direction-C '>
            <h2 className='subtitle'>My Skills</h2>         
            <h6>HTML5</h6>
            <div className='bar flex-full'> 
              <motion.div className='html ' variants={Variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>99%</motion.div>
            </div>
           
            <h6>JavaScript</h6>
            <div className='bar flex-full'> 
              <motion.div className='jscript ' variants={Variants} initial="hidden" whileInView="visible" >95%</motion.div>
            </div>
            <h6>CSS</h6>
            <div className='bar flex-full'> 
              <motion.div className='css' variants={Variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>97%</motion.div>
            </div>
            <h6>REACT</h6>
            <div className='bar flex-full'> 
              <motion.div className='react' variants={Variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>92%</motion.div>
            </div>
            <h6>PHP</h6>
            <div className='bar flex-full'> 
              <motion.div className='php' variants={Variants} initial="hidden" whileInView="visible" >93%</motion.div>
            </div>
            <h6>SQL</h6>
            <div className='bar flex-full'> 
              <motion.div className='sql' variants={Variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>87%</motion.div>
            </div>
      </div>
    </div>
  )
}

export default About