import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
  import LocomotiveScroll from 'locomotive-scroll';
import Proposal from './components/Proposal'
const App = () => {
 


const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full  text-white min-h-screen bg-zinc-100 '>
      <Navbar />
      <Landing />
      <Marque />
      <About />
      <Eyes />
      <Featured />
     <Cards />
     <Proposal />
<Footer />
    
    </div>

    

  )
}

export default App