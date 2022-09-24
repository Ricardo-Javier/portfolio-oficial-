import React from 'react'
import './Section3.scss';
import { useInView } from "react-intersection-observer";

import Techs from '../../Components/Techs';


function Section3() {
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
    <div ref={ref} className={`section3 ${actionClass}`}>
 

     <h1 ref={ref} className={`title ${actionClass}`}>
       SKILLS 
      </h1>

      <Techs/>
  
   
    </div>
    </>
  )
}
export { Section3 }

