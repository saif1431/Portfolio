import React from 'react'
import {HERO_CONTENT} from '../Costants'
import profileImg from "../assets/portfolioImg.jpg"
import { motion } from "framer-motion"


const container =(delay)=>({
hidden : {x: -100, opacity: 0},
visible:{x:0, opacity:1, 
transition:{duration: 0.5, delay: delay}
},
})

function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35' >
     <div className=' overflow-x-hidden flex flex-wrap '>
      <div className='w-full lg:w-1/2'>
      <div className='flex flex-col items-start lg:items-start '>
            <motion.h1  
            variants={container(0)}
            initial="hidden"
            animate="visible"

            className='pb-16 font-extralight text-4xl lg:mt-16 lg:text-7xl tracking-tight'>Saif ur Rehman</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-2xl lg:text-3xl bg-clip-text text-transparent'>Front End Developer</motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className='my-2 max-w-[90%] py-6 font-light tracking-wider'>
            {HERO_CONTENT}
            </motion.p>
      </div>
      </div>
      <div className='w-full lg:w-1/2 lg:p-8'>
      <motion.div
      initial={{x:100, opacity:0}}
      animate={{x:0, opacity:1}} 
      transition={{duration: 1, delay: 1.2}}
      className=' rounded-lg flex justify-center bg-gradient-to-b from-zinc-600'>
<img className='mix-blend-overlay filter grayscale drop-shadow-md rounded-lg w-full   object-center object-cover' src={profileImg} alt="" />
      </motion.div>
      </div>
     </div>
    </div>
  )
}

export default Hero
