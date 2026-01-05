
import { motion } from 'framer-motion'
import React from 'react'

const Marque = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-t-4xl bg-[#004D43]'>
<div className="  text border-t-2 border-b-2 border-zinc-100 flex overflow-hidden whitespace-nowrap">
    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:10}} className='text-[17vw] leading-none font-["Test Founders Grotesk Cnd Light"] font-bold uppercase pt-10 tracking-tighter mb-[3vw] pr-20' >We are ochi </motion.h1>
    
    <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:10}} className='text-[17vw] leading-none font-["Test Founders Grotesk Cnd Light"] font-bold uppercase  pt-10 tracking-tighter mb-[3vw] pr-20 ' >We are ochi </motion.h1>
</div>

    </div>
  )
}

export default Marque