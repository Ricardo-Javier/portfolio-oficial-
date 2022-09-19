import {React} from 'react'
import './Section2.scss';
import { useInView } from "react-intersection-observer";
import {Line} from '../../Components/Line';
import Button from 'react-bootstrap/Button';



function Section2 () {  

  const [ref, inView] = useInView({
    threshold: 0.4,
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
        <Line/>
      <h1 ref={ref} className={`title ${actionClass}`}>ABOUT ME * ABOUT ME * ABOUT ME * ABOUT ME * ABOUT ME * ABOUT ME * ABOUT ME * ABOUT ME * ABOUT ME *</h1>
      <Line/>
      <div className='about-container'>       
      <h1 ref={ref} className={`about ab-one ${actionClass}`}> FULL STACK WEB DEVELOPMENT CERTIFICATE </h1>
      <h1 ref={ref} className={`about ab-two ${actionClass}`}> FRONT-END FOCUSED </h1>
      <h1 ref={ref} className={`about ab-three ${actionClass}`}> INTERESTED IN WEB INTERACTION | WEB ANIMATION | WEB 3D </h1>      
      <h1 ref={ref} className={`about ab-four ${actionClass}`}> ENGLISH | SPANISH </h1>
      <h1 ref={ref} className={`about ab-five ${actionClass}`}> INTERNATIONAL BUSINESS | CUSTOMER SERVICE BACKGROUND</h1>
      <h1 ref={ref} className={`about ab-six ${actionClass}`}> SELF-DEVELOPED | HARD-WORKER | PASSIONATE </h1>
     
      <div ref={ref} className={`about ab-seven ${actionClass}`}> 
      
      More about me? <Button className='mainbutton resumebutton' href='https://github.com/Ricardo-Javier' > 
        Download my Resume
      </Button>

      </div>
   
    
      </div>
      </div>
    </>
  )
}

export { Section2 }
