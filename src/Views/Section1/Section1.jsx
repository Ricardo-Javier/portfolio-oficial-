import {React} from 'react'
import ScrollAnim from '../../Components/ScrollAnim';
import './Section1.scss';
import { useInView } from "react-intersection-observer";






function Section1 () {
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
      <div className='section1'  >
      <h1 className={`hello ${actionClass}`} >
        HELLO
      </h1>      
   
      <h1 ref={ref} className={`ric ${actionClass}`}>
         I'M RICARDO 
      </h1>
      <h1  className={`beg ${actionClass}`}>
        A BEGINNER  FRONT-END DEVELOPER     
      </h1> 
      </div>
      <div ref={ref} className={`scroll-anim ${actionClass}`}>
        <ScrollAnim/>     
      </div>

    </>
  )
}

export { Section1 }
