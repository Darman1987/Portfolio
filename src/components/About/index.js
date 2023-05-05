import React from 'react'
import './index.css';

const About =() =>{
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
            <div className='bar flex-full'>90%</div>
            <h6>JavaScript</h6>
            <div className='bar flex-full'>90%</div>
            <h6>CSS</h6>
            <div className='bar flex-full'>90%</div>
            <h6>PHP</h6>
            <div className='bar flex-full'>90%</div>
           </div>
    </div>
  )
}

export default About