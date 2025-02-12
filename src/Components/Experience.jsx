import React from 'react'
import {EXPERIENCES} from "../Costants"
import { animate, motion } from "framer-motion"


function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
              whileInView={{opacity:1, y: 0}} 
              initial={{opacity:0, y: -100}}
              transition ={{duration:1.5}}
      className='text-center text-4xl my-20'>Experience</motion.h1>
      <div>
            {EXPERIENCES.map((experience, index)=>(
                  <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                         whileInView={{opacity:1, x: 0}} 
                         initial={{opacity:0, x: -100}}
                         transition ={{duration:1.5}}
                        className='w-full lg:w-1/4'>
                        <p className='text-sm text-neutral-400 mb-2'>{experience.year}</p>
                        </motion.div>
                        <motion.div
                         whileInView={{opacity:1, x: 0}} 
                         initial={{opacity:0, x: 100}}
                         transition ={{duration:1.5}}
                        className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'> {experience.role} 
                         -{" "} <span className='text-purple-100 text-sm'>{experience.company}</span>     
                              </h6>
                              <p className='mb-2 text-neutral-400'>{experience.description}</p>
                              {experience.technologies.map((technology, index)=>(
                                    <span key={index } className='px-2 py-1 bg-neutral-900 mr-2 mt-4 rounded text-sm font-medium text-purple-800' >{technology}</span>
                              ))}
                              </motion.div>
                  </div>
            ))}
      </div>
    </div>
  )
}

export default Experience
