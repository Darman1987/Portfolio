import React from 'react'
import './index.css';
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineOpenInNew } from 'react-icons/md';
import {motion} from "framer-motion";
import  covid from '../../assets/covid.png';
import  kangaroo from '../../assets/kangaroo.png';
import  mesac from '../../assets/mesac.png';
import  mockup from '../../assets/mockup.png';
import  memory from '../../assets/memory.png';

const Portfolio = () => {
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
    <div id="Portfolio" className='flex-container  direction-C align-left'>
           <h2>My Portfolio</h2>
           

           <motion.div className="card flex-full" variants={Variants} initial="hidden" whileInView="visible" >
                {/* <p>Featured Project</p> */}
                <h3>3D Game Unity</h3>
                <a href='https://drive.google.com/file/d/1pCPvDsuxNajggohAsA8QI7salRR1mSIx/view?usp=sharing'><img src={covid} alt="Avatar" /></a>
                <p>First person shooting game</p><br/>
                  <b>Technologies: </b>
                  <ul>
                    <li>Unity</li>
                    <li>C#</li>
                    <li>3ds Max</li>
                    <li>Photoshop</li>
                  </ul>                 
                <div className="container">
                    <a href='https://drive.google.com/file/d/1pCPvDsuxNajggohAsA8QI7salRR1mSIx/view?usp=sharing'><MdOutlineOpenInNew/></a>
                    {/* <a><AiFillGithub/></a> */}
                </div>
            </motion.div>
            <br/>
            <motion.div className="card flex-full"  variants={Variants} initial="hidden" whileInView="visible">
                 {/* <p>Featured Project</p> */}
                 <h3>2D Game Stencyl</h3>
                <a href='https://drive.google.com/file/d/1-ykfNFundxxKjeDO3NN63CuLeCmeThzZ/view?usp=sharing'><img src={kangaroo} alt="Avatar" /></a>
                <p>Endless runner game</p><br/>
                  <b>Technologies: </b>
                  <ul>
                    <li>Stencyl</li>                  
                    <li>Photoshop</li>
                  </ul>                 
                <div className="container">
                    <a href=' https://drive.google.com/file/d/1-ykfNFundxxKjeDO3NN63CuLeCmeThzZ/view?usp=sharing'><MdOutlineOpenInNew/></a>
                    {/* <a><AiFillGithub/></a> */}
                </div>
            </motion.div>
            <br/>
            <motion.div className="card flex-full"  variants={Variants} initial="hidden" whileInView="visible">
                 {/* <p>Featured Project</p> */}
                 <h3>Web Page Wordpress</h3>
                <a href='https://mesacmesac.wordpress.com/'><img src={mesac} alt="Avatar" /></a>
                <p>Web page picnic baskets</p><br/>
                  <b>Technologies: </b>
                  <ul>
                    <li>Wordpress</li>                  
                    <li>Photoshop</li>
                  </ul>                 
                <div className="container">
                    <a href=' https://mesacmesac.wordpress.com/'><MdOutlineOpenInNew/></a>
                    {/* <a><AiFillGithub/></a> */}
                </div>
            </motion.div>
            <br/>
            <motion.div className="card flex-full"  variants={Variants} initial="hidden" whileInView="visible">
                 {/* <p>Featured Project</p> */}
                 <h3>Figma Mockup</h3>
                <a href='https://www.figma.com/file/ENtLTHU0g63VwH1CRIjEbv/Portfolio?type=design&node-id=2-2'><img src={mockup} alt="Avatar" /></a>
                <p>My portfolio mockup</p><br/>
                  <b>Technologies: </b>
                  <ul>
                    <li>Figma</li>                  
                    <li>Font Awesome</li>
                  </ul>                 
                <div className="container">
                    <a href=' https://www.figma.com/file/ENtLTHU0g63VwH1CRIjEbv/Portfolio?type=design&node-id=2-2'><MdOutlineOpenInNew/></a>
                    {/* <a><AiFillGithub/></a> */}
                </div>
            </motion.div>
            <motion.div className="card flex-full"  variants={Variants} initial="hidden" whileInView="visible">
                 {/* <p>Featured Project</p> */}
                 <h3>HMTL Memory Game</h3>
                <a href='https://darman1987.github.io/js-advanced/5.game-memory.html'><img src={memory} alt="Avatar" /></a>
                <p>Vegtable memory game</p><br/>
                  <b>Technologies: </b>
                  <ul>
                    <li>HTML</li>                  
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>canva</li>
                  </ul>                 
                <div className="container">
                    <a href='https://darman1987.github.io/js-advanced/5.game-memory.html'><MdOutlineOpenInNew/></a>
                    {/* <a><AiFillGithub/></a> */}
                </div>
            </motion.div>
                  
    </div>
  )
}

export default Portfolio