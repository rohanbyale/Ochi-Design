import React, { useEffect, useState, useRef } from "react";

const CallToAction = () => {
  const [rotate, setRotate] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Calculate the center of the eyes rather than the center of the window
      // This makes the tracking much more accurate
      const rect = containerRef.current?.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      let deltaX = mouseX - centerX;
      let deltaY = mouseY - centerY;

      // Calculate angle in degrees
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      // We set the rotation. 
      // If the eye looks away, change (angle - 180) to just (angle)
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.2'  className="w-full min-h-screen bg-[#CDEA68] flex flex-col items-center justify-center font-sans overflow-hidden py-20">
      
      <div className="relative flex flex-col items-center">
        <div className="relative w-full flex justify-center items-center">
          <h1 className="text-[13vw] leading-[12vw] font-['Test Founders Grotesk Cnd Light'] tracking-tighter font-black text-[#212121] uppercase text-center select-none z-0">
            Ready <br /> To Start <br /> The Project?
          </h1>

          {/* The Animated Eyes Overlay */}
          <div data-scroll data-scroll-speed='.3' ref={containerRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full shadow-xl"
              >
                {/* Iris */}
                <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full overflow-hidden">
                  {/* The Line that rotates */}
                  <div
                    style={{
                      transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                    }}
                    className="absolute top-1/2 left-1/2 w-full h-10"
                  >
                    {/* The Pupil - If it's looking the wrong way, move 'ml-2' to 'mr-2' and change alignment */}
                    <div className="w-8 h-8 bg-zinc-100 rounded-full ml-2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-4 mt-16 relative z-10 font-['Test Founders Grotesk Cnd Light] ">
        <button className="group flex items-center gap-10 px-10 py-5 bg-[#212121] rounded-full font-['Test Founders Grotesk Cnd Light'] text-white uppercase text-sm font-medium">
          Start the project
          <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
        </button>
        <span className="text-[#212121] font-bold text-lg">OR</span>
        <button className="group flex items-center gap-10 px-10 py-5 border-2 border-[#212121] rounded-full text-[#212121] uppercase text-sm font-medium hover:bg-[#212121] hover:text-white transition-all">
          hello@ochi.design
          <div className="w-2 h-2 bg-[#212121] rounded-full group-hover:bg-white group-hover:scale-150 transition-all"></div>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;