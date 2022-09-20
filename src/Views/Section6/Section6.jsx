import React from 'react'
import './Section6.scss';
import { useInView } from "react-intersection-observer";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faAnglesUp, faPhone } from '@fortawesome/free-solid-svg-icons';



function Section6() {

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

      <div ref={ref} className={`section6 ${actionClass}`}>
    
      <Card className="text-center">
     
      <div ref={ref} className={`title title-footer ${actionClass}`}>RICARDO-JAVIER.COM * RICARDO-JAVIER.COM * RICARDO-JAVIER.COM * RICARDO-JAVIER.COM * RICARDO-JAVIER.COM * RICARDO-JAVIER.COM *
      </div>
    
      <Card.Body>
        <Card.Title>
     
        <ul>
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
          
        </Card.Title>
        <Card.Text> 
          <br/>Site optimazed for Chrome, desktop and mobile.
          <br/>
          <br/>
       
          Resources that I used on this Web:
          <br/>
          <br/>
     
         <a target ='_blank' rel="noreferrer" href="https://skfb.ly/6TTzK"> * 3D MODEL</a>
         <br/>
         <br/>      
        </Card.Text>
        <a className='arrowup' href="#1">
          <FontAwesomeIcon icon ={faAnglesUp}/>
        </a>
        <Card.Footer className="text-muted">Miami Beach, FL, 33139.</Card.Footer>
      </Card.Body>
      
    </Card>
      </div>
      
   
    </>
  )
}

export { Section6 }
