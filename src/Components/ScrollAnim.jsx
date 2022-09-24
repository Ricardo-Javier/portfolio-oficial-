import React from "react";
import lottie from "lottie-web";
import anim from "../assets/arrowdown.json";

export default function ScrollAnim() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#anim"),
      renderer:'canvas',
      animationData: anim,
      rendererSettings: {
        progressiveLoad:true,
    
      },
    });
  }, []);

  return (
    <div>      
      <div id="anim" style={{ height: 150 }} />
    </div>
  );
}