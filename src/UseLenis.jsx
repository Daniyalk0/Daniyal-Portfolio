import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const UseLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing function
      smooth: true,
    });

    function onAnimationFrame(time) {
      lenis.raf(time);
      requestAnimationFrame(onAnimationFrame);
    }

    requestAnimationFrame(onAnimationFrame);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default UseLenis;
