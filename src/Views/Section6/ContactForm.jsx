import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Section6.scss';
import { useInView } from "react-intersection-observer";


export const ContactForm = () => {

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  });

  let actionClass = null;

  if (inView) {
    actionClass = "inview";
  } else {
    actionClass = "outview";
  }
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
   <div ref={ref} className={`form-anim-cont ${actionClass}`}>
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