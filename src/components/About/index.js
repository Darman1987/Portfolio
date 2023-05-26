import React from 'react'
import './index.css';
import Bar from '../Bar';


const About =() =>{
 
  const skills = [
    {title:'HTML5', percentage: '99'},
    {title:'JavaScript', percentage: '95'},
    {title:'CSS', percentage: '97'},
    {title:'REACT', percentage: '92'},
    {title:'PHP', percentage: '96'},
    {title:'SQL', percentage: '90'},
  ];
  
  return (
    <div id="About">
    <div className='flex-container flex-S'>
           <h2>About Me</h2>
           <p>Software Developer with 5 years of experience, developing, analyzing, testing, and maintaining web application development based on PHP, SQL Server, MySQL, JavaScript, jQuery, CSS, and Bootstrap.
           As part of my previous roles, I am familiar with the following frameworks/technologies React, Vuejs, Angular, Python, Nodejs, C#, Laravel, CSS3, REST API, CMS, Git, SCRUM methodology, Cordova, Ionic, Excel, Power BI, Linux, Adobe suite, Figma and Unity.</p>
                  
    </div>
    <div className='flex-container direction-C '>
            <h2 className='subtitle'>My Skills</h2>
            {
              skills.map((item, key)=>(
                <Bar title={item.title} percentage={item.percentage} key={key} viewport={{ once: true }}/>
              ))
            }         
                    
      </div>
    </div>
  )
}

export default About