import React from 'react'
import { useState } from 'react';
import './index.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../Logo/index';
import Modal from '../Modal';


const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

    return (
      <nav >  
        <div className="flex-container justify-SB">
        <Logo width='15mm' height='15mm' delay='1.5'/>
          <a href="#" onClick={() => setIsOpen(!isOpen)}><GiHamburgerMenu className='icon'/> </a>
        </div>

        <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)}>
          <ul>
            <li> <a href="#Home" onClick={() => setIsOpen(!isOpen)} >Home</a></li>    
            <li> <a href="#About"  onClick={() => setIsOpen(!isOpen)}>About Me</a></li>    
            <li> <a href="#Portfolio"  onClick={() => setIsOpen(!isOpen)}>My Portfolio</a></li>    
            <li> <a href="#Contact"  onClick={() => setIsOpen(!isOpen)}>Contact Me</a></li>
          </ul>
        </Modal>  
      </nav> 
  )
}

export default Nav