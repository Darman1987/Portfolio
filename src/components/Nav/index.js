import React from 'react'
import { useState } from 'react';
import './index.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscClose } from 'react-icons/vsc';
import { motion,AnimatePresence  } from "framer-motion"

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,   
    transition: { 
      duration: 1.5,
      delay:1.5,
      ease: "easeInOut",
    }
  }
};

const menuVariants = {
  open: { x: 0 },
  closed: { x: '100%' },
};

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

    return (
<nav >  
  <div className="flex-container justify-SB">
  <svg width="15mm" height="15mm" version="1.1" viewBox="0 0 62.532 62.532" xmlns="http://www.w3.org/2000/svg">
        <motion.path d="m31.266 2.5c15.905 1e-6 28.766 12.861 28.766 28.766s-12.861 28.766-28.766 28.766-28.766-12.861-28.766-28.766c-2e-6 -15.905 12.861-28.766 28.766-28.766z" fill="none" stroke="#0a0773" strokeWidth="5" variants={pathVariants}
          initial="hidden"
          animate="visible"/>
        <motion.path d="m40.259 31.238q0-3.2556-1.1348-5.488t-3.3858-3.5161q-1.6371-0.93018-3.4789-1.2836-1.8418-0.37207-4.409-0.37207h-3.4603v21.375h3.4603q2.6603 0 4.6323-0.39068 1.9906-0.39067 3.6463-1.4511 2.065-1.3208 3.0882-3.4789 1.0418-2.158 1.0418-5.395z" fill="none" stroke="#0a0773" strokeWidth="5" variants={pathVariants}
          initial="hidden"
          animate="visible"/>
  </svg>
    <a href="#" onClick={() => setIsOpen(!isOpen)}><GiHamburgerMenu className='icon'/> </a>
  </div>

  <AnimatePresence>
  {isOpen && (
    <motion.div className='container-menu' animate="open" exit="closed" variants={menuVariants}>
    <a href="#" onClick={() => setIsOpen(!isOpen)}><VscClose className="icon"/></a>
    <ul initial="closed">
      <li> <a href="#Home" onClick={() => setIsOpen(!isOpen)} >Home</a></li>    
      <li> <a href="#About"  onClick={() => setIsOpen(!isOpen)}>About Me</a></li>    
      <li> <a href="#Portfolio"  onClick={() => setIsOpen(!isOpen)}>My Portfolio</a></li>    
      <li> <a href="#Contact"  onClick={() => setIsOpen(!isOpen)}>Contact Me</a></li>
    </ul>
  </motion.div>
  )}
  </AnimatePresence>
  
</nav> 
  )
}

export default Nav