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
  const [style, setStyle] = useState({ color: 'red', textAlign:'center' });
  const [stylEmail, setStylEmail] = useState({});

  const templateParams = {
    from_name: name,
    to_name: 'Dear Diego',
    message: message,
    email:email,
    subject: subject,
  };

  const handleEmail =(email)=> {
    setEmail(email);   
    if(validationError)
    validateEmail(email)?setStylEmail({}):setStylEmail({ border: '2px solid red' });  
 }

  const validateEmail =(email)=> {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const setError =(message)=> {
    setStyle({ color: 'red', textAlign:'center'});
    setvalidationError(message);
  }
  

  const handleSubmit=(event)=> {
    event.preventDefault();   
    
    if (name && message && email && subject) 
       validateEmail(email)?sendEmail():setError('Please enter a valid email!');         
      else
        setError('Please, complete all the information to send Message!');     
   
  }

  const sendEmail = () => { 
    setvalidationError('');
    emailjs.send('Your_service', 'Your_template', templateParams, 'Your_Key')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStyle({ color: 'green', textAlign:'center'});
        setvalidationError('Email sent successfully, thank you for contacting me!');

      }, (error) => {
        console.log('Email failed to send:', error.text);
      });
  }

  return (
    <div id="Contact" className='flex-container  direction-C align-left'>
       <span><h2>Contact Me</h2></span>
       <div>
       <div className="contact">        
          <p><MdLocationPin/> <span>Taringa, QLD</span></p>
          <p><BsFillTelephoneFill/> <span>0405359332</span></p>
          <p><GrMail/><span>darman1987@hotmail.com</span></p>
        </div>
        <motion.form action="#" className='flex-container'  whileInView={{
          scale: [0,1],
          transition: {
            duration: 1,
            type: "spring",
            stiffness: 20,
          },
        }}>
    
          <input type="text"   name="firstname" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>    
          <input type="email" required name="email" placeholder="Email" style={stylEmail} onChange={(e)=>handleEmail(e.target.value)}/> 
          <input type="text"   name="subject" placeholder="Subject" onChange={(e)=>setSubject(e.target.value)}/> 
          <textarea id="message"  name="message" placeholder="Message" onChange={(e)=>setMessage(e.target.value)} ></textarea>          
          <motion.button type="submit" whileHover={{ backgroundColor: "white", color:'#0A0773', border:'2px solid #0A0773' }} className='btn submit'onClick={handleSubmit}>
             <BsFillSendFill/> Send Message
          </motion.button>          
         </motion.form>
         <div style={style}>{validationError}</div>    
       </div> 
             
    </div>

  )
}

export default Contact