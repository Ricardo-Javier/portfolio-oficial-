import React from 'react'
import './Section4.scss';
import { useInView } from "react-intersection-observer";
import '../../Components/ProjectModal.scss'
import Modals from '../../Components/ProjectModal';
import { Line } from '../../Components/Line';





function Section4() {

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
    <div ref={ref} className={`section4 ${actionClass}`}>
    <Line/>
    <h1 ref={ref} className={`title ${actionClass}`}>PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS</h1>
    <Line/>
      <Modals/>
    </div> 
    </>
  )
}

export { Section4 }
