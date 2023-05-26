import React from 'react'
import './index.css'
import { motion,AnimatePresence  } from "framer-motion"
import { VscClose } from 'react-icons/vsc';

const Modal = (props)=> {

    const menuVariants = {
        open: { x: 0 },
        closed: { x: '100%' },
      };

      const modal = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: { 
          y: "0px", 
          opacity: 1,
          transition: { delay: 0.1 }
        },
      }  
      
  return (
    <AnimatePresence>
    {props.isOpen && (
      <motion.div className='container-menu' animate="open" exit="closed" variants={menuVariants}>
      <a href="#" onClick={props.setIsOpen}><VscClose className="icon"/></a>
      <motion.div  variants={modal} initial="hidden" animate="visible">{props.children}</motion.div>
    </motion.div>
    )}
    </AnimatePresence>
  )
}

export default Modal


