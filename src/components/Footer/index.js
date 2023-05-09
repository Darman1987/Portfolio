import React from 'react'
import './index.css';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Footer = ()=> {
  return (
    <div className='footer flex-full'>
           <a href='https://www.linkedin.com/in/diego-mesa-cuervo/'><BsLinkedin/></a> <a href='https://github.com/Darman1987'><AiFillGithub/></a>
               <h6>Designed & Built by Diego Mesa</h6>
    </div>
  )
}

export default Footer