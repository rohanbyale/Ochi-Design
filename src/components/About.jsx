import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68]  rounded-t-3xl text-black '>

<h1 className=' font-[Neue_Montreal] text-[4.5vw] tracking-tight leading-[4.5vw]  '>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>

<div className='w-full flex gap-5  border-t-[1px] mt-20  pt-10 border-[#44520f] '>

  <div className='w-1/2 '>
  <h1 className='text-7xl '>Our approach</h1>
  <button className='mt-10 uppercase px-10 py-6 bg-zinc-900 rounded-full text-white flex gap-10 items-center '>Read More
    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
  </button>
  </div>

  <div className='w-1/2 h-[60vh] bg-[#4b5b11] rounded-3xl '>
  <img className='rounded-3xl  h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2025/09/Ihor_ochi.design.avif" alt="" />
  </div>
</div>

    </div>
  )
}

export default About