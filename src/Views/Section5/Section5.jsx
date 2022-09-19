import React from 'react'
import './Section5.scss';
import { useInView } from "react-intersection-observer";
import { ProjectVideo } from '../../Components/HoverVideoPlayer';
// import { ProjectModal } from '../../Components/ProjectModal';
import '../../Components/ProjectModal.scss'
import Modals from '../../Components/ProjectModal';
import { Button } from 'react-bootstrap';
import { Line } from '../../Components/Line';





function Section5() {

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
    <div ref={ref} className={`section5 ${actionClass}`}>
    <Line/>
    <h1 ref={ref} className={`title ${actionClass}`}>PROJECTS | PROJECTS | PROJECTS | PROJECTS | PROJECTS | PROJECTS | PROJECTS</h1>
    <Line/>
      <Modals/>
    </div> 
    </>
  )
}

export { Section5 }
