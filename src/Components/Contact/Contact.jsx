import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from "react";
import { useState } from 'react';
const Contact = () => {
     
    const form = useRef();
      
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6ojsl2t', 'template_0znfwyf', form.current, '4BX5kdyHNtH1QKE0O')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };






  return (
    <div className="contact-form" id='Contact'>
         {/*left side*/}
        <div className="w-left">
          <div className="awesome">
          <span>Get in Touch </span>
          <span>With Me</span>
          </div>
 
        </div>


          {/*right side*/}
           
           <div className="c-right">

            <form ref={form} onSubmit={sendEmail}>
                <input  type="text" name= "user_name" className="user" placeholder='Name'/>
                <input  type="email" name= "user_email" className="user" placeholder='Email'/>
                <textarea name='message' className="user" placeholder='Message' />
                <input  type="submit" value= "Send" className="button" />
                <span>{done && "Thanks for Contacting Me!"}</span>
                <div className='c-blur' 
                    style={{background: "yellow"}}
                    >
   

                </div>
            </form>

           </div>

    </div>
  )
}

export default Contact