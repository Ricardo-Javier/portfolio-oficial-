import React from "react";
import lottie from "lottie-web";
import hearts from "../assets/hearts.json";
import { useRef } from "react";

export default function AnimHearts() {
const ref = useRef(null)
  React.useEffect(() => {
    var animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: ref.current,
      animationData: hearts,
      rendererSettings: {
        progressiveLoad:true,
        renderer: 'canvas',
        loop: false,
      autoplay: false,
      },
    });


  }, []);


  

  return (
    <div>
      
      <div className='hearts-anim' id="anims" ref={ref} style={{ height: 50 }} />
    </div>
  );
}