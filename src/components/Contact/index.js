import React, { useState } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { BsFillSendFill } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import {motion} from "framer-motion";
import './index.css';



const Contact =()=> {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [validationError, setvalidationError] = useState('');
  const [style, setStyle] = useState({ color: 'red', alignSelf:'center' });

  const templateParams = {
    from_name: name,
    to_name: 'Dear Diego',
    message: message,
    email:email,
    subject: subject,
  };

  const handleSubmit=(event)=> {
    event.preventDefault();

    if (name && message && email && subject) {
      sendEmail();
      setvalidationError('');
    } else {
      setStyle({ color: 'red', alignSelf:'center' });
      setvalidationError('Please, complete all the information to send Message!');
    }
  }

  const sendEmail = () => { 
  
    emailjs.send('service_20ctwz1', 'template_nc9utyd', templateParams, 'Ixv5KDhALh_o3apOI')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStyle({ color: 'green', alignSelf:'center'});
        setvalidationError('Email sent successfully!');

      }, (error) => {
        console.log('Email failed to send:', error.text);
      });
  }

  return (
    <div id="Contact" className='flex-container  direction-C align-left'>
        <h2>Contact Me</h2>
        <div className="contact">        
          <p><MdLocationPin/> <span>Taringa, QLD</span></p>
          <p><BsFillTelephoneFill/> <span>0405359332</span></p>
          <p><GrMail/><span>darman1987@hotmail.com</span></p>
        </div>
        <motion.form action="#" className='flex-container flex-full'  whileInView={{
          scale: [0,1],
          transition: {
            duration: 1,
            type: "spring",
            stiffness: 20,
          },
        }}>
    
          <input type="text"   name="firstname" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>    
          <input type="email" required name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/> 
          <input type="text"   name="subject" placeholder="Subject" onChange={(e)=>setSubject(e.target.value)}/> 
          <textarea id="message"  name="message" placeholder="Message" onChange={(e)=>setMessage(e.target.value)} ></textarea>          
          <motion.button type="submit" whileHover={{ backgroundColor: "white", color:'#0A0773', border:'2px solid #0A0773' }} className='btn submit'onClick={handleSubmit}>
             <BsFillSendFill/> Send Message
          </motion.button>          
         </motion.form>
         <div style={style}>{validationError}</div>         
    </div>

  )
}

export default Contact