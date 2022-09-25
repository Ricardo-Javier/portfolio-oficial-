import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Section5.scss';



export const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_service', form.current, 'hgWCnpwIYzNIS2aMQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
   <div className='form-anim-cont'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input className='mainbutton sendbutton' type="submit" value="Send" />
    </form>
    </div>
    </>
  );
};