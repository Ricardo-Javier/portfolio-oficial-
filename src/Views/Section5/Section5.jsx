import React from 'react'
import './Section5.scss';
import {ContactForm} from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
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
   
      <h1 className='title'>CONTACT </h1> 
   
        <p className='form-text text-anim-cont'>If you are looking to add a junior/trainee level developer to your team, reach me out! 
        <br/>I'm open to learn everything with passion and hard-working.       
          </p>
          <ul className='icon-anim-cont'>
        <li>
        <a target ='_blank' rel='noreferrer' href ='https://www.linkedin.com/in/rsalinaszambrano/'>
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ricardo-javier"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
     </ul>     
          <ContactForm/>          
           
   
      </div>
   
    </>
  )
}

export { Section5 }
