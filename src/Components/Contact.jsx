import React from 'react'
import { CONTACT } from '../Costants'
import { animate, motion } from "framer-motion"

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
             whileInView={{opacity:1, y: 0}} 
             initial={{opacity:0, y: -100}}
             transition ={{duration:1.5}}
      className='text-center text-4xl my-20'>Get in Touch</motion.h1>
      <div className='text-center'>
        <motion.p 
        className='mb-4'>{CONTACT.address}</motion.p>
        <p className='mb-4'>{CONTACT.phoneNo}</p>
        <a className='mb-4 border-b text-nuteral-400 hover:text-white' href="">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
