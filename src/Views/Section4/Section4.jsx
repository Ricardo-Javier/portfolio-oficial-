import React from 'react'
import './Section4.scss';
import { useInView } from "react-intersection-observer";
import '../../Components/ProjectModal.scss'
import Modals from '../../Components/ProjectModal';






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

    <h1 ref={ref} className={`title ${actionClass}`}>PROJECTS</h1>

      <Modals/>
    </div> 
    </>
  )
}

export { Section4 }
