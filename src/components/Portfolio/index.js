import React from 'react'
import './index.css';
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineOpenInNew } from 'react-icons/md';

const Portfolio = () => {
  return (
    <div id="Portfolio" className='flex-container  direction-C align-left'>
           <h2>My Portfolio</h2>
           

           <div className="card flex-full">
                <p>Featured Project</p>
                <h3>Name Project</h3>
                {/* <img src="img_avatar.png" alt="Avatar" /> */}
                <p>Test</p>
                <div className="container">
                    <a><MdOutlineOpenInNew/></a>
                    <a><AiFillGithub/></a>
                </div>
            </div>
            <br/>
            <div className="card flex-full">
                <p>Featured Project</p>
                <h3>Name Project</h3>
                {/* <img src="img_avatar.png" alt="Avatar" /> */}
                <p>Test</p>
                <div className="container">
                     <a><MdOutlineOpenInNew/></a>
                    <a><AiFillGithub/></a>
                </div>
            </div>
                  
    </div>
  )
}

export default Portfolio