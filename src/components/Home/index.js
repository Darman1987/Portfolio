import React from 'react'
import './index.css';
import avatar from '../../assets/avatar.jpg';
import { FaFileDownload } from 'react-icons/fa';
import Resume  from '../../assets/CV-Diego-2023.pdf';

const Home = () => {
  return (
    <div id="Home" className='flex-container direction-C'>
       <h1>Diego Mesa</h1>
       <p>Full Stack Developer</p>
       <img src={avatar} alt="Avatar" className='avatar' />
       <a href={Resume} target='_blank'><button className="btn"><FaFileDownload/> Download CV</button></a>
    </div>
    
  )
}

export default Home