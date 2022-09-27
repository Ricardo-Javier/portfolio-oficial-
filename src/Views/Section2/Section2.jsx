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
      <h1 className='about'> Full stack web development certificate </h1>
      <h1 className='about'> Front-End focused </h1>
      <h1 className='about'> Interest in web interaction, web animation, web 3d </h1>      
      <h1 className='about'> English - Spanish </h1>
      <h1 className='about'> International business, customer service background</h1>
      <h1 className='about'> Self-developed, hard-working, passionate </h1>     
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
