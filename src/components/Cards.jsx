import React from 'react';

const Cards = () => {
  return (
    <div
   
      /* Added flex-col for mobile, flex-row for medium screens and up */
      /* Changed h-screen to min-h-screen to allow content to grow on mobile */
      className='w-full min-h-screen bg-zinc-800 flex flex-col md:flex-row px-5 md:px-20 py-10 md:py-0 items-center gap-5'
    >
      {/* Container 1: Full width on mobile, half width on desktop */}
      <div className="cardcontainer1 h-[40vh] md:h-[50vh] w-full md:w-1/2">
        <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo 1" />
          <button className='absolute px-4 py-2 md:px-5 md:py-3 rounded-full border-2 left-5 bottom-5 md:left-10 md:bottom-10 text-white text-xs md:text-sm whitespace-nowrap'>
            &copy; Rohan
          </button>
        </div>
      </div>

      {/* Container 2: Full width on mobile, half width on desktop */}
      <div className="cardcontainer2 flex flex-col sm:flex-row gap-5 h-auto md:h-[50vh] w-full md:w-1/2">
        <div className="relative card w-full sm:w-1/2 rounded-xl flex items-center justify-center h-[40vh] md:h-full bg-[#000000]">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Logo 2" />
          <button className='absolute px-4 py-2 md:px-5 md:py-3 rounded-full border-2 left-5 bottom-5 md:left-10 md:bottom-10 text-white text-xs md:text-sm whitespace-nowrap'>
            Rating on Clutch
          </button>
        </div>

        <div className="relative card w-full sm:w-1/2 rounded-xl h-[40vh] md:h-full flex items-center justify-center bg-[#212121]">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Logo 3" />
          <button className='absolute px-4 py-2 md:px-5 md:py-3 rounded-full border-2 left-5 bottom-5 md:left-10 md:bottom-10 text-white text-xs md:text-sm whitespace-nowrap'>
            Business Bootcamp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;