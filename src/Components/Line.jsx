import {React} from 'react'
import './Line.scss';
import { useInView } from "react-intersection-observer";





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
