import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div  className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7"  className='relative w-full h-full bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full"
            >
              <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 w-full h-10"
                >
                  <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eyes;

// import React, { useEffect, useState } from "react";

// const Eyes = () => {
//       const [rotate, setRotate] = useState(0)

//        useEffect(()=>{
//               window.addEventListener("mousemove",(e)=>{
//                  let mouseX = e.clientX;
//                  let mouseY = e.clientY;

//                  let deltaX = mouseX - window.innerWidth/2;
//                  let deltaY = mouseY - window.innerHeight/2;

//                  var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
//                      setRotate(angle-180);
//               })
//        })
//   return (
//     <div className="eyes w-full  h-screen overflow-hidden">
//       <div className=' relative w-full h-full bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
//         <div className="absolute flex  gap-10 top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]    ">

//           <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
//             <div className=" relative  w-2/3 h-2/3 bg-zinc-900 rounded-full">
//               <div style={{transform :`translate(-50% , -50%) rotate(${rotate}deg)`}} className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//  line w-full h-10">
//                 <div className=" w-10 h-10 bg-zinc-100 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//           <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
//             <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
//                <div style={{transform :`translate(-50% , -50%) rotate(${rotate}deg)`}}  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//  line w-[60%] h-10">
//                 <div className=" w-10 h-10 bg-zinc-100 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Eyes;
