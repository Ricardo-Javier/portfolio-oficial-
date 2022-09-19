import {React, useEffect, useRef} from "react";
import lottie from "lottie-web";

export default function HelloAnim() {

  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/hello.json")
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
  
      <div
      style={{ height: 300 }}
        ref={container}
        onMouseEnter={() => lottie.play()}
        onMouseLeave={() => lottie.pause()}
      />
  );
}
