import React from 'react'
import './index.css'
import {motion} from "framer-motion";
import { MdOutlineOpenInNew } from 'react-icons/md';

const Card = ({title,url,image,subtitle,techs}) => {

    const Variants = {
        hidden: {     
          scale: 0.5,
          rotate:-90,          
        },
        visible: {    
          scale: 1,
          rotate:0,            
          transition: {        
            duration: 1,
            yoyo: "Infinity",
          }
        }
      };
  return (
    <motion.div className="card flex-full" variants={Variants} initial="hidden" whileInView="visible" >
                {/* <p>Featured Project</p> */}
                <h3>{title}</h3>
                <a href={url}><img src={image} alt="Avatar" /></a>
                <p>{subtitle}</p><br/>
                  <b>Technologies: </b>
                  <ul>
                  {techs.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                  </ul>                 
                <div className="container">
                    <a href={url}><MdOutlineOpenInNew/></a>
                    {/* <a><AiFillGithub/></a> */}
                </div>
    </motion.div>
  )
}

export default Card