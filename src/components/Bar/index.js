import React, { useState, useEffect } from 'react';
import './index.css';
import {motion} from "framer-motion";

const Bar = ({title, percentage,...props})=> {

    const [count, setCount] = useState(0);
  
    const limit = parseInt(percentage);
    const duration =2;
   
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, duration*1000/limit);

    if (count === limit) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [count]);


    const gradientStyle = {       
            background: `linear-gradient(to right,  #0A0773 ${percentage}%, white ${100-percentage}% )`               
        
    };

    const variants = {
        hidden: {     
            background: 'white'
        },
        visible: {    
            background: `linear-gradient(to right,  #0A0773 ${percentage}%, white ${100-percentage}% )` ,            
          transition: {  
            delay:1,      
            duration: duration,
            ease: "easeInOut",
          }
        }
    };    

    

  return (
    <div>
    <h6>{title}</h6>
     <div className='bar flex-full'> 
       <motion.div style={gradientStyle} variants={variants} initial="hidden" whileInView="visible" {...props}>{count}%</motion.div>
     </div>
    </div> 
  )
}

export default Bar