import React from 'react'
import './Section5.scss';
import {ContactForm} from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useInView } from "react-intersection-observer";



function Section5() {
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



  return (
    <>
      <div ref={ref} className={`section5 ${actionClass}`}> 
   
      <h1 ref={ref} className={`title ${actionClass}`}>CONTACT </h1> 
   
        <p ref={ref} className={`form-text text-anim-cont ${actionClass}`}>If you are looking to add a junior/trainee level developer to your team, reach me out! 
        <br/>I'm open to learn everything with passion and hard-working.       
          </p>
          <ul ref={ref} className={`icon-anim-cont ${actionClass}`}>
       <li>
         <a href="https://wa.me/13052162077" rel="noreferrer" target="_blank">
           <FontAwesomeIcon icon={faWhatsapp}/>
           </a>
       </li>
       <li>
          <a href="tel:+1-305-216-2077" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </li>
        <li>
        <a target ='_blank' rel='noreferrer' href ='https://www.linkedin.com/in/rsalinaszambrano/'>
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </li>
     </ul>     
          <ContactForm/>          
           
   
      </div>
   
    </>
  )
}

export { Section5 }
