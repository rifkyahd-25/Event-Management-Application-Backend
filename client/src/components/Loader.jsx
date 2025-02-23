import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const dotsRef = useRef([]);

  useEffect(() => {
    gsap.to(dotsRef.current, {
      y: 20,
      autoAlpha: 1,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "back.inOut",
    });
  }, []);



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex space-x-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            className="w-3 h-3 bg-gray-700 dark:bg-gray-300 rounded-full"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
