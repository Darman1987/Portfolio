import React from 'react'
import './index.css';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Footer = ()=> {
  return (
    <div className='footer flex-full'>
               <BsLinkedin/> <AiFillGithub/>
               <h6>Designed & Built by Diego Mesa</h6>
    </div>
  )
}

export default Footer