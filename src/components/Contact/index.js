import React from 'react'
import { MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { BsFillSendFill } from 'react-icons/bs';
import './index.css';

const Contact =()=> {
  return (
    <div id="Contact" className='flex-container  direction-C align-left'>
        <h2>Contact Me</h2>
        <div className="contact">        
          <p><MdLocationPin/> <span>Taringa, QLD</span></p>
          <p><BsFillTelephoneFill/> <span>0405359332</span></p>
          <p><GrMail/><span>darman1987@hotmail.com</span></p>
        </div>
        <form action="action_page.php" className='flex-container flex-full'>
    
          <input type="text"  name="firstname" placeholder="Name"/>    
          <input type="email"  name="email" placeholder="Email"/> 
          <input type="text"  name="subject" placeholder="Subject"/> 
          <textarea id="message" name="message" placeholder="Message" ></textarea>
          <button type="submit" className='btn submit'>
             <BsFillSendFill/> Send Message
          </button>

         </form>         
    </div>

  )
}

export default Contact