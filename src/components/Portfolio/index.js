import React from 'react'
import './index.css';
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineOpenInNew } from 'react-icons/md';
import  covid from '../../assets/covid.png';
import  kangaroo from '../../assets/kangaroo.png';
import  mesac from '../../assets/mesac.png';
import  mockup from '../../assets/mockup.png';
import  memory from '../../assets/memory.png';
import Card from '../Card';

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

  const cards =[
    {
      title:"3D Game Unity",
      url:"https://drive.google.com/file/d/1pCPvDsuxNajggohAsA8QI7salRR1mSIx/view?usp=sharing",
      image:covid,
      subtitle: "First person shooting game",
      techs: ['Unity','C#','3ds Max','Photoshop']
    },
    {
      title:"2D Game Stencyl",
      url:"https://drive.google.com/file/d/1-ykfNFundxxKjeDO3NN63CuLeCmeThzZ/view?usp=sharing",
      image:kangaroo,
      subtitle: "Endless runner game",
      techs: ['Stencyl','Photoshop']
    },
    {
      title:"Web Page Wordpress",
      url:"https://mesacmesac.wordpress.com/",
      image:mesac,
      subtitle: "Web page picnic baskets",
      techs: ['Wordpress','Photoshop']
    },
    {
      title:"HMTL Memory Game",
      url:"https://darman1987.github.io/js-advanced/5.game-memory.html",
      image:covid,
      subtitle: "Vegtable memory game",
      techs: ['HTML','CSS','JavaScript','Canva']
    },
    {
      title:"Figma Mockup",
      url:"https://www.figma.com/file/ENtLTHU0g63VwH1CRIjEbv/Portfolio?type=design&node-id=2-2",
      image:mockup,
      subtitle: "My portfolio mockup",
      techs: ['Figma','Font Awesome']
    },
  ];
  return (
    <div id="Portfolio" className='flex-container  direction-C align-left'>
          <span><h2>My Portfolio</h2></span>
          {cards.map((item, index) => (
            <Card key={index} title={item.title} url={item.url} image={item.image} subtitle={item.subtitle} techs={ item.techs}/>
                    ))}           
    </div>
  )
}

export default Portfolio