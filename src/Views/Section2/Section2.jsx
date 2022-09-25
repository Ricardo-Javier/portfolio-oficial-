import {React} from 'react'
import './Section2.scss';
import { useInView } from "react-intersection-observer";
import Button from 'react-bootstrap/Button';
import resume from '../../assets/resume-dev.pdf'



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
      <h1 className='title'>ABOUT ME </h1>
      <div className='about-container'>       
      <h1 className='about'> FULL STACK WEB DEVELOPMENT CERTIFICATE </h1>
      <h1 className='about'> FRONT-END FOCUSED </h1>
      <h1 className='about'> INTERESTED IN WEB INTERACTION | WEB ANIMATION | WEB 3D </h1>      
      <h1 className='about'> ENGLISH | SPANISH </h1>
      <h1 className='about'> INTERNATIONAL BUSINESS | CUSTOMER SERVICE BACKGROUND</h1>
      <h1 className='about'> SELF-DEVELOPED | HARD-WORKER | PASSIONATE </h1>     
      <div className='about ab-seven'>       
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
