import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { animate, motion } from "framer-motion"
import { FaCss3Alt } from "react-icons/fa6"


const iconVairent = (duration)=> ({
  initial : {y: -10},
  animate : {
    y: [10, -10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat : Infinity,
      repeatType: 'reverse',
    }
  }
})

function Technologies() {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <motion.h1 
        whileInView={{opacity:1, y: 0}} 
        initial={{opacity:0, y: -100}}
        transition ={{duration:1.5}}
      className='text-center text-4xl my-20'>Technologies</motion.h1>
      <motion.div
       whileInView={{opacity:1, x: 0}} 
       initial={{opacity:0, x: -100}}
       transition ={{duration:1.5}}
       className=' flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVairent(2.5)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaReact className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div
            variants={iconVairent(3)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiNextjsLine  className='text-7xl ' />
            </motion.div>
            <motion.div
            variants={iconVairent(3.5)}
            initial = "initial"
            animate = "animate"
            
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb   className='text-7xl text-green-500' />
            </motion.div>
            <motion.div
            variants={iconVairent(4)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoHtml5     className='text-7xl text-orange-700' />
            </motion.div>
            <motion.div
            variants={iconVairent(4.5)}
            initial = "initial"
            animate = "animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs     className='text-7xl text-green-500' />
            </motion.div>
            <motion.div
            variants={iconVairent(5)}
            initial = "initial"
            animate = "animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaCss3Alt      className='text-7xl text-blue-500' />
            </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
