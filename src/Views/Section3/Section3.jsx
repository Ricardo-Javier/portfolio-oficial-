import React from 'react'
import './Section3.scss';
import { useInView } from "react-intersection-observer";
import { Line } from '../../Components/Line';
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
      <Line/>

     <h1 ref={ref} className={`title ${actionClass}`}>
       SKILLS * SKILLS * SKILLS * SKILLS * SKILLS * SKILLS * SKILLS * SKILLS * SKILLS * SKILLS * SKILLS *
      </h1>
      <Line/>
      <Techs/>
  
   
    </div>
    </>
  )
}
export { Section3 }

