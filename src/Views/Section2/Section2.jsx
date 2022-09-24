import {React} from 'react'
import './Section2.scss';
import { useInView } from "react-intersection-observer";
import Button from 'react-bootstrap/Button';
import resume from '../../assets/Resume-Ricardo-Javier.pdf'



function Section2 () {  

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
      <div ref={ref} className={`section2 ${actionClass}`}>
      <h1 ref={ref} className={`title ${actionClass}`}>ABOUT ME </h1>
      <div className='about-container'>       
      <h1 ref={ref} className={`about ab-one ${actionClass}`}> FULL STACK WEB DEVELOPMENT CERTIFICATE </h1>
      <h1 ref={ref} className={`about ab-two ${actionClass}`}> FRONT-END FOCUSED </h1>
      <h1 ref={ref} className={`about ab-three ${actionClass}`}> INTERESTED IN WEB INTERACTION | WEB ANIMATION | WEB 3D </h1>      
      <h1 ref={ref} className={`about ab-four ${actionClass}`}> ENGLISH | SPANISH </h1>
      <h1 ref={ref} className={`about ab-five ${actionClass}`}> INTERNATIONAL BUSINESS | CUSTOMER SERVICE BACKGROUND</h1>
      <h1 ref={ref} className={`about ab-six ${actionClass}`}> SELF-DEVELOPED | HARD-WORKER | PASSIONATE </h1>     
      <div ref={ref} className={`about ab-seven ${actionClass}`}>       
      More about me? <Button className='mainbutton resumebutton' href={resume} download="Resume Ricardo" > 
        Download my Resume
      </Button>
      </div>    
      </div>
      </div>
    </>
  )
}

export { Section2 }
