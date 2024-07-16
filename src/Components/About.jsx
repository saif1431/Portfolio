import React from 'react'
import portfolioImg from "../assets/portfolioImg.jpg"
import { ABOUT_TEXT } from '../Costants'
import { motion } from "framer-motion"

function About() {
  return (
    <div className=' border-b border-neutral-900 pb-4'>
      <h1 className='m-20 text-center text-3xl lg:text-4xl'>About 
        <span className='text-neutral-500'> Me</span> </h1>

        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2 lg:p-8'>
          <motion.div
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition ={{duration:0.5}}
          className='f rounded-lg flex items-center justify-center bg-gradient-to-b from-zinc-600'>
            <img className='mix-blend-overlay filter grayscale drop-shadow-md rounded-lg w-full   object-center object-cove' src={portfolioImg} alt="" />
          </motion.div>
          </div>
          <div className='w-full lg:w-1/2 lg:p-8'>
          <motion.div 
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x:100}}
           transition ={{duration:0.5, delay:0.5}}
          className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6 font-thin tracking-wider text-white'> {ABOUT_TEXT}</p>
            </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About
