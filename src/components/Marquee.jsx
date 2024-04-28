import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className=' w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className=' text-[15vw] leading-none font-["Test_Founders_Grotesk_x-Condensed"] uppercase pt-2 -mb-[2vw] font-semibold'>We Are OCHI</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className=' text-[15vw] leading-none font-["Test_Founders_Grotesk_x-Condensed"] uppercase pt-2 -mb-[2vw] font-semibold'>We Are OCHI</motion.h1>
          
           
           
        </div>
      
    </div>
  )
}

export default Marquee
