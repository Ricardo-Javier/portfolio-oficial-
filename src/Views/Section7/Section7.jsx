import React from 'react'
import './Section7.scss';
import { useInView } from "react-intersection-observer";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faAnglesUp, faPhone } from '@fortawesome/free-solid-svg-icons';



function Section7() {

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

      <div ref={ref} className={`section7 ${actionClass}`}>
    
      <Card className="text-center">
     
      <div ref={ref} className={`title title-footer ${actionClass}`}>RICARDO-JAVIER.COM | RICARDO-JAVIER.COM | RICARDO-JAVIER.COM | RICARDO-JAVIER.COM | RICARDO-JAVIER.COM | RICARDO-JAVIER.COM |
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
        <a target ='_blank' rel='noreferrer' href ='https://www.linkedin.com/rsalinaszambrano'>
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </li>
     </ul> 
          
        </Card.Title>
        <Card.Text>
          Disclaimer: I'm NOT a 3D designer &#40;yet&#41;.
          <br/>
          <br/>
       
          Resources that I used on this Web:
          <br/>
          <br/>
     
         <a target ='_blank' rel="noreferrer" href="https://skfb.ly/6TTzK"> * 3D MODEL</a>
         <br/>
         <a target ='_blank' rel="noreferrer" href="https://codesandbox.io/s/scroll-based-animation-nqhw4?file=/src/components/Particles.js"> * PARTICLES</a>
         <br/>
         <a target ='_blank' rel="noreferrer" href="https://codesandbox.io/s/scrollcontrols-gltf-4jr4p"> * CAMERA</a>
         <br/>
         <a target ='_blank' rel="noreferrer" href="https://codesandbox.io/s/figma-noodles-iedfg"> * BACKGROUND</a>          
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

export { Section7 }
