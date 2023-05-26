import React from 'react'
import { motion } from "framer-motion"



const Logo =({width,height,delay=0})=> {

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
        delay:delay,
        ease: "easeInOut",
      }
    }
  };

  return (
    <svg width={width} height={height} version="1.1" viewBox="0 0 62.532 62.532" xmlns="http://www.w3.org/2000/svg">
        <motion.path d="m31.266 2.5c15.905 1e-6 28.766 12.861 28.766 28.766s-12.861 28.766-28.766 28.766-28.766-12.861-28.766-28.766c-2e-6 -15.905 12.861-28.766 28.766-28.766z" fill="none" stroke="#0a0773" strokeWidth="5" variants={pathVariants}
          initial="hidden"
          animate="visible"/>
        <motion.path d="m40.259 31.238q0-3.2556-1.1348-5.488t-3.3858-3.5161q-1.6371-0.93018-3.4789-1.2836-1.8418-0.37207-4.409-0.37207h-3.4603v21.375h3.4603q2.6603 0 4.6323-0.39068 1.9906-0.39067 3.6463-1.4511 2.065-1.3208 3.0882-3.4789 1.0418-2.158 1.0418-5.395z" fill="none" stroke="#0a0773" strokeWidth="5" variants={pathVariants}
          initial="hidden"
          animate="visible"/>
  </svg>
  )
}

export default Logo