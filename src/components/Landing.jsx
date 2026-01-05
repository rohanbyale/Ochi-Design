import { motion } from "framer-motion";
import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Landing = () => {
 
  return (
    <div data-scroll  data-scroll-speed="-.3" className="w-full h-screen bg-zinc-100 text-black pt-1 ">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((items, index) => {
          return (
            <div className="masker  ">
              <div className="w-fit flex ">
                {index == 1 && (
                  <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}}  className="rounded-md overflow-hidden w-[9vw] h-[6vw] bg-red-500 relative top-[1vw]">
<img className="h-full w-full object-cover" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>
                )}
                <h1 className='  uppercase text-[7.5vw] leading-[7vw]  font-bold font-[" Founders_Grotesk_X-Condensed"]'>
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-b-zinc-700 mt-32 flex justify-between items-center py-5 px-20  ">
        {[
          "for public and private companies",
          "From the First pitch to IPO",
        ].map((item, index) => (
          <p className=" font-light  leading-none tracking-tight font-medium">
            {" "}
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light uppercase text-md">
            start the Project{" "}
          </div>
          <div className="w-10 h-10 flex items-center justify-center  rounded-full  border-[1px] border-zinc-500 ">
            <MdOutlineArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
