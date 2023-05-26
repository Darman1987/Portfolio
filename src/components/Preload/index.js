import React from 'react'
import { useEffect, useState } from 'react';
import './index.css';
import Logo from '../Logo';



const Preload = ()=> {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 1500);
       
  });



  return (
    <div className={`container-loader ${isActive?'hide':''}`}>
        <div id="loader">
       <Logo width='62mm' height='62mm'/>
        </div>
    </div>
    
  )
}

export default Preload