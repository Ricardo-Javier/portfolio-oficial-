import React from "react";
import lottie from "lottie-web";
import anim from "../assets/lines.json";

export default function LinesAnim() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#linesanim"),
      renderer:'canvas',
      animationData: anim,
      rendererSettings: {
        progressiveLoad:true,
    
      },
    });
  }, []);

  return (
    <div>      
      <div id="linesanim" style={{width:'200vw' }} />
    </div>
  );
}