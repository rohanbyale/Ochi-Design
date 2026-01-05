import { motion, useAnimation } from 'framer-motion'
import React, {} from 'react'
import {Power4} from "gsap/all"


const Featured = () => {
  
const cards = [useAnimation(), useAnimation(),useAnimation(), useAnimation(),]

const handleHover =(index)=>{
cards[index].start({y:"0"})  
}
const handleHoverEnd = (index) => {
  cards[index].start({
    y: "100%",
    transition: {
      ease: [0.76, 0, 0.24, 1],
      duration: 0.5,
    },
  })
}

  return (   
    <div

    
     className='w-full py-20 text-black'>

        <div className='w-full px-20  border-b-[1px] pb-20 border-zinc-700  '>
            <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
        </div>

    <div className='px-20'>

        <div className="cards flex gap-10 cards w-full mt-7">


<motion.div 
onHoverStart={()=>handleHover(0)}  onHoverEnd={() => handleHoverEnd(0)}
  className="cardcontainer relative  w-1/2 h-[75vh] ">
<h1 className='absolute flex  overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] tracking-tighter leading-none text-9xl mb-10 text-[#CDEA68]'>{"SILENCE LAB".split('').map((item,index)=>
<motion.span initial={{y:"100%"}} animate={cards[0]} className='inline-block'>{item}</motion.span>)}
</h1>
<div className='card w-full h-full rounded-xl  overflow-hidden bg-green-700'>

  <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
</div>

</motion.div>



<motion.div
onHoverStart={()=>handleHover(1)}  onHoverEnd={() => handleHoverEnd(1)}
className="cardcontainer relative  w-1/2 h-[75vh] ">
<div className='card w-full h-full rounded-xl  overflow-hidden bg-green-700'>
  <h1 className='absolute  flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] tracking-tighter leading-none text-9xl mb-10 text-[#CDEA68]'>{"VISE".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[1] } >{item}</motion.span>)}</h1>
    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />
</div>

</motion.div>




            </div>
    </div>
    <div className='px-20 py-15'>

        <div className="cards flex gap-10 cards w-full mt-7">


<motion.div 
onHoverStart={()=>handleHover(2)}  onHoverEnd={() => handleHoverEnd(2)}
  className="cardcontainer relative  w-1/2 h-[75vh] ">
<h1 className='absolute flex  overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] tracking-tighter leading-none text-9xl mb-10 text-[#CDEA68]'>{"AH2 & MATTHRON".split('').map((item,index)=>
<motion.span initial={{y:"100%"}} animate={cards[2]} className='inline-block'>{item}</motion.span>)}
</h1>
<div className='card w-full h-full rounded-xl  overflow-hidden bg-green-700'>

  <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
</div>

</motion.div>



<motion.div
onHoverStart={()=>handleHover(3)}  onHoverEnd={() => handleHoverEnd(3)}
className="cardcontainer relative  w-1/2 h-[75vh] ">
<div className='card w-full h-full rounded-xl  overflow-hidden bg-green-700'>
  <h1 className='absolute  flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] tracking-tighter leading-none text-9xl mb-10 text-[#CDEA68]'>{"VISE".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[3] } >{item}</motion.span>)}</h1>
    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png" alt="" />
</div>

</motion.div>




            </div>
    </div>


    </div>
  
  )
}
 
export default Featured