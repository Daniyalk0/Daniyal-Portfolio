import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const targetPosition = useRef({ x: 0, y: 0 }); // Where the mouse is
  const currentPosition = useRef({ x: 0, y: 0 }); // Position of the custom cursor
  const cursorRef = useRef(null); // The custom cursor element
  const [isVisible, setIsVisible] = useState(true); // Controls opacity of the cursor

  // The size of the cursor
  const cursorSize = 29; // Adjust to match the cursor's width and height

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPosition.current.x = e.clientX;
      targetPosition.current.y = e.clientY;
      setIsVisible(true); // Show cursor when mouse moves inside
    };

    const handleMouseOut = () => {
      setIsVisible(false); // Hide cursor when mouse leaves screen
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible]);

  useEffect(() => {
    const animate = () => {
      const speedFactor = 0.2; // Adjust for cursor speed
      // Interpolate cursor position smoothly towards the target position
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * speedFactor;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * speedFactor;

      if (cursorRef.current) {
        // Adjust transform to center cursor and apply opacity based on visibility
        const offsetX = cursorSize / 2; // Half of the cursor width
        const offsetY = cursorSize / 2; // Half of the cursor height

        cursorRef.current.style.transform = `translate3d(${currentPosition.current.x - offsetX}px, ${
          currentPosition.current.y - offsetY
        }px, 0)`;

        cursorRef.current.style.opacity = isVisible ? 1 : 0; // Fade in/out the cursor
      }

      requestAnimationFrame(animate); // Loop animation
    };

    animate(); // Start animation loop
  }, [isVisible]);

  // useEffect(() => {
  //   if (cursorRef.current) {
  //     cursorRef.current.style.opacity = isVisible ? 1 : 0;
  //     cursorRef.current.style.transform = `translate3d(${currentPosition.current.x - cursorSize / 2}px, ${
  //       currentPosition.current.y - cursorSize / 2
  //     }px, 0)`;
  //   }
  // }, [isVisible, currentPosition.current.x, currentPosition.current.y]);
  
  

  return (
    <div
      ref={cursorRef}
      className="dark:bg-[#ffffff35] bg-[#00000040] rounded-full fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        width: cursorSize + "px",
        height: cursorSize + "px",
        transform: "translate(-50%, -50%)", // Center cursor initially
        transition: "opacity 0.3s ease", // Smooth opacity transition
      }}
    ></div>
  );
};

export default CustomCursor;
