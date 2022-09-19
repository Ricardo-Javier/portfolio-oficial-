import React from 'react'
import './Section3.scss';
import { useInView } from "react-intersection-observer";





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
     
      <div ref={ref} className={`section3 box ${actionClass}`}>
      <p className='parag'>  Full Stack Web Development  Front-End Development. Animations and 3D. animation/design tools, such as Adobe Suite softwares, No-Code platforms, etc. </p> 
      </div>      
    </>
  )
}

export { Section3 }