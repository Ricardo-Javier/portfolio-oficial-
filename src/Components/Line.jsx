import {React, useState} from 'react'
import './Line.scss';
import { useInView } from "react-intersection-observer";
import lines from '../assets/circle1.svg'




function Line () {  

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
      <div ref={ref} className={`line ${actionClass}`}>
    </div>   
    </>
  )
}

export { Line }
